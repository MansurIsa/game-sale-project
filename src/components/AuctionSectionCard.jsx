import React, { useState, useEffect } from 'react';
import AuctionSectionCardImg from "../images/250x200.png";
import axios from 'axios';
import { baseUrl } from '../MAIN_API';

const AuctionSectionCard = ({ data }) => {
  const auctionId = data?.id;
  const initialDurationInSeconds = data?.auction_duration * 3600;
  const createdAt = new Date(data?.created_at);
  const auctionEndTime = new Date(createdAt.getTime() + initialDurationInSeconds * 1000);

  const calculateTimeLeft = (endTime) => {
    const now = new Date();
    const totalSeconds = Math.max(0, Math.floor((endTime - now) / 1000));
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { hours, minutes, seconds, totalSeconds };
  };

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(auctionEndTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTimeLeft => {
        if (prevTimeLeft.totalSeconds <= 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0, totalSeconds: 0 };
        }
        return calculateTimeLeft(auctionEndTime);
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [auctionEndTime]);

  useEffect(() => {
    if (timeLeft.totalSeconds === 0) {
      endAuction();
    }
  }, [timeLeft]);

  const endAuction = async () => {
    try {
      const response = await axios.post(`${baseUrl}/auction/end/${auctionId}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(response);

      if (response.status !== 200) {
        throw new Error('Failed to end auction');
      }

      console.log(`Auction ${auctionId} ended successfully.`);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='auction_section_card'>
      <div className="auction_section_card_up">
        <img src={data?.photo || AuctionSectionCardImg} alt="Auction Item" />
        <div className="auction_section_card_up_hover">
          <button>Detaylar</button>
        </div>
      </div>
      <div className="auction_section_card_down">
        <p className='auction_section_card_down_time'>
          {`${timeLeft.hours.toString().padStart(2, '0')}:${timeLeft.minutes.toString().padStart(2, '0')}:${timeLeft.seconds.toString().padStart(2, '0')}`}
        </p>
        <p>{data?.title}</p>
        <div className="auction_section_card_down_prices">
          <del>1050,00 ₺</del>
          <p>{data?.price} ₺</p>
        </div>
        <button>Katıl</button>
      </div>
    </div>
  );
}

export default AuctionSectionCard;

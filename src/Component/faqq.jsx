import React from 'react';
import ReactDOM from 'react-dom';
import FAQ from './FAQ';

const faqData = [
  {
    id: 1,
    question: "Why Do I Need to Insure My Shipment?",
    answer: "International Logistics Companies have limited liability under International Conventions for loss or damage to unprotected goods. In the case of an incident, your compensation is normally governed under a 'standard' regulatory liability clause. E4 Global Logistics gives you the freedom of 'standard' liability or the full value of your goods."
  },
  {
    id: 2,
    question: "I've Never Had a Problem Before so Why Would I Pay for Insurance Now?",
    answer: "While major shipping incidents with great care but accidents outside of our control do happen. Even well-packed and handled items such as family heirlooms may still impact your shipment. E4 Global Logistics is a cost-effective way of protecting your goods and giving you peace of mind."
  },
  {
    id: 3,
    question: "When Something Goes Wrong, Isn't E4 Global Logistics Responsible Anyway?",
    answer: "As a limited liability carrier, our liability is dictated by International Transport conventions and your contract with us. However, it will always be a fraction of the value of your goods, which is less likely to be enough to cover the loss. Full declared value insurance has been found to be superior in most cases."
  },
  {
    id: 4,
    question: "If My Goods Are Lost or Damaged, What Do I Need to Do?",
    answer: "You will have to simply contact your local E4 Global Logistics representative, who will help you through the claims process and help you acquire all of the necessary paperwork."
  },
  {
    id: 5,
    question: "How Much Does the Delivery Cost?",
    answer: "It depends on your shipping volume, distance, size and weight of goods, insurance and the current surcharges in your country."
  },
  {
    id: 6,
    question: "What Do I Need to Pick-up the Shipment?",
    answer: "All which is needed are the shipment invoice or order code and an ID."
  },
  {
    id: 7,
    question: "What geographical areas do you service?",
    answer: "Europe, America, Nigeria and Ghana for now."
  },
  {
    id: 8,
    question: "My Shipment is Missing, What Should I Do?",
    answer: "Firstly, check the tracking status of your shipment on our website. This will indicate the current location and status of your shipment. If it still appears to be missing, contact our customer service team and we will look at the situation and provide further instructions."
  }
];

const imageSrc = '/path-to-your-image/545444554.PNG'; // Replace with the actual path to the image

ReactDOM.render(<FAQ faqs={faqData} imageSrc={imageSrc} />, document.getElementById('root'));

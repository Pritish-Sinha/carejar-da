import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './categories.css';

const categoriesData = [
  { title: 'Dentist', description: 'Teething troubles? Schedule a dental checkup', image: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg' },
  { title: 'Gynecologist/Obstetrician', description: 'Explore women\'s health, pregnancy, and infertility treatments', image: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg' },
  { title: 'Dietitian/Nutrition', description: 'Get guidance on eating right, weight management, and sports nutrition', image: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg' },
  { title: 'Physiotherapist', description: 'Pulled a muscle? Get it treated by a trained physiotherapist', image: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg' },
  { title: 'General surgeon', description: 'Need to get operated? Find the right surgeon', image: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-surgeon@2x.jpg' },
  { title: 'Orthopedist', description: 'For Bone and Joints issues, spinal injuries, and more', image: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-orthopedist@2x.jpg' },
];

const Categories = ({ setCategories }) => {
  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] = useState(0);

  const handleCategoryClick = (index) => {
    setCategories(categoriesData[index].title);
    navigate('/doctors');
  };


  return (
    <div className='main_grp'>
      <h2>Book an appointment for an in-clinic consultation</h2>
      <h4>Find experienced doctors across all specialties</h4>

      <div className="categories-container">
        {categoriesData.map((item, index) => (
          <div
            key={index}
            className={`category-card ${currentCategory === index ? 'active' : ''}`}
            onClick={() => handleCategoryClick(index)}
            onMouseOver={() => setCurrentCategory(index)}
            onMouseOut={() => setCurrentCategory(-1)}
          >
            <img src={item.image} alt={item.title} className="category-image" />
            <h3 className="category-title">{item.title}</h3>
            <p className="category-description">{item.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Categories;

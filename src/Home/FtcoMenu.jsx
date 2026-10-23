import React, { useState } from 'react';
import { useCart } from 'react-use-cart'; // استدعاء هوك السلة
import Swal from 'sweetalert2'; // استدعاء مكتبة التنبيهات

function FtcoMenu() {
  const { addItem } = useCart();

  // حالة للتنقل بين الأقسام
  const [activeTab, setActiveTab] = useState('mainDish');

  // بيانات المنتجات مرتبة حسب الأقسام
  const menuData = {
    mainDish: [
      { id: '1', name: 'Grilled Beef 1', price: 15.90, img: 'images/dish-1.jpg', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.' },
      { id: '2', name: 'Grilled Beef 2', price: 18.90, img: 'images/dish-2.jpg', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.' },
      { id: '3', name: 'Grilled Beef 3', price: 16.90, img: 'images/dish-3.jpg', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.' },
    ],
    drinks: [
      { id: '4', name: 'Lemonade Juice', price: 8.90, img: 'images/drink-1.jpg', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.' },
      { id: '5', name: 'Pineapple Juice', price: 7.90, img: 'images/drink-2.jpg', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.' },
      { id: '6', name: 'Soda Drinks', price: 7.90, img: 'images/drink-3.jpg', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.' },
    ],
    desserts: [
      { id: '7', name: 'Hot Cake Honey 1', price: 10.90, img: 'images/dessert-1.jpg', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.' },
      { id: '8', name: 'Hot Cake Honey 2', price: 6.90, img: 'images/dessert-2.jpg', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.' },
      { id: '9', name: 'Hot Cake Honey 3', price: 8.90, img: 'images/dessert-3.jpg', desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.' },
    ]
  };

  // دالة الإضافة مع إظهار تنبيه لطيف
  const handleAddToCart = (product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.img,
    });

    Swal.fire({
      icon: 'success',
      title: 'Awesome!',
      text: `You have added to your cart!`,
      confirmButtonColor: '#0c924d',
      width: '300px', // عرض مناسب ومستطيل
      padding: '1em', // تقليص المساحات الداخلية
      showCloseButton: true,
      timer: 2000
    });
  };

  return (
    <div>
      <section className="ftco-menu">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 heading-section text-center">
              <span className="subheading">Discover</span>
              <h2 className="mb-4 style={{color:'#6c6131',}}">Our Products</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div className="row d-md-flex">
            <div className="col-lg-12 p-md-5">
              <div className="row">
                
                {/* أزرار التبويب بنفس الشكل والتنسيق الأصلي للموقع */}
                <div className="col-md-12 nav-link-wrap mb-5">
                  <div
                    className="nav nav-pills justify-content-center"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      type="button"
                      className={`nav-link border-0 ${activeTab === 'mainDish' ? 'active' : ''}`}
                      onClick={() => setActiveTab('mainDish')}
                      style={{ cursor: 'pointer' }}
                    >
                      Main Dish
                    </button>
                    <button
                      type="button"
                      className={`nav-link border-0 ${activeTab === 'drinks' ? 'active' : ''}`}
                      onClick={() => setActiveTab('drinks')}
                      style={{cursor: 'pointer' }}
                    >
                      Drinks
                    </button>
                    <button
                      type="button"
                      className={`nav-link border-0 ${activeTab === 'desserts' ? 'active' : ''}`}
                      onClick={() => setActiveTab('desserts') }
                      style={{ cursor: 'pointer' }}
                    >
                      Desserts
                    </button>
                  </div>
                </div>

                {/* عرض المحتوى حسب القسم المحدد */}
                <div className="col-md-12 d-flex align-items-center">
                  <div className="tab-content w-100" id="v-pills-tabContent">
                    <div className="row">
                      {menuData[activeTab].map((item) => (
                        <div className="col-md-4 text-center" key={item.id}>
                          <div className="menu-wrap">
                            <div
                              className="menu-img img mb-4"
                              style={{ backgroundImage: `url(${item.img})` }}
                            />
                            <div className="text">
                              <h3><a href="#!">{item.name}</a></h3>
                              <p>{item.desc}</p>
                              <p className="price"><span>${item.price.toFixed(2)}</span></p>
                              <p>
                                <button
                                  onClick={() => handleAddToCart(item)}
                                  className="btn btn-primary btn-outline-dark border-0"
                                >
                                  Add to cart
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FtcoMenu;
import React, { useRef } from 'react';
import "../Styles/About.css";
import delivery1 from "../Assests/delievery1.webp";
import delivery2 from "../Assests/delivery2.webp";
import delivery3 from "../Assests/delivery3.webp";
import aboutImage from "../Assests/about-right.webp";

const About = () => {

    const cardRef = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left; // mouse X inside div
        const y = e.clientY - rect.top;  // mouse Y inside div

        const rotateX = ((y / rect.height) - 0.5) * 20;
        const rotateY = ((x / rect.width) - 0.5) * 20;

        cardRef.current.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        if (cardRef.current) {
            cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
        }
    };
    return (
        <>
            {/* <!-- Mission Section --> */}
            <section className="mission container">
                <div className="row">
                    {/* Text Column (8) */}
                    <div className="col-8 mission-text">
                        <h3>Our Mission</h3>
                        <p>
                            At Exclusive, we believe shopping should be simple, secure, and
                            enjoyable. Our mission is to bring you the latest in electronics,
                            fashion, and lifestyle products at unbeatable prices, all from the
                            comfort of your home. With a wide selection of trusted brands, fast
                            delivery, and dedicated customer support, we aim to create a shopping
                            experience that combines convenience with quality. Whether you’re
                            upgrading your tech, refreshing your wardrobe, or finding the perfect
                            gift, Exclusive is here to make every purchase easy and reliable.
                        </p>
                    </div>

                    {/* Image Column (4) */}
                    <div className="col-4 mission-img">
                        <img src={aboutImage} alt="Mission" />
                    </div>
                </div>
            </section>

            {/* <!-- Team Section --> */}
            <section className="team container">
                <h3>Meet Our Team</h3>
                <div className="team-grid">
                    <div className="team-member" ref={cardRef}
                        data-tooltip="Customer feedback"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}>
                        <img src={delivery1} alt="Team" />
                        <h4>John Doe</h4>
                        <p>Founder & CEO</p>
                    </div>
                    <div className="team-member" ref={cardRef}
                        data-tooltip="Customer feedback"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}>
                        <img src={delivery2} alt="Team" />
                        <h4>Maria Smith</h4>
                        <p>Marketing Head</p>
                    </div>
                    <div className="team-member" ref={cardRef}
                        data-tooltip="Customer feedback"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}>
                        <img src={delivery3} alt="Team" />
                        <h4>David Lee</h4>
                        <p>Lead Developer</p>
                    </div>
                </div>
            </section>

            {/* <!-- Testimonials --> */}
            <section className="testimonials container">
                <h3>What Our Customers Say</h3>
                <div className="testimonial-grid">
                    <div className="testimonial">
                        <p>"Amazing shopping experience. Fast delivery and excellent quality!"</p>
                        <h4>- Sarah K.</h4>
                    </div>
                    <div className="testimonial">
                        <p>"Best customer support, they really care about satisfaction."</p>
                        <h4>- James B.</h4>
                    </div>
                    <div className="testimonial">
                        <p>"Affordable prices and premium products. Highly recommend!"</p>
                        <h4>- Emma T.</h4>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
import React, { useRef } from 'react';
import "../Styles/About.css";
import delivery1 from "../Assests/delievery1.webp";
import delivery2 from "../Assests/delivery2.webp";
import delivery3 from "../Assests/delivery3.webp";
import best4 from "../Assests/best4.webp";

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
                <div className="mission-text">
                    <h3>Our Mission</h3>
                    <p>Lorem,  ipsum dolor sit amet consectetur Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Optio, nam! Vero nesciunt, mollitia minima veritatis sequisap
                        iente exercitationem dignissimos amet officiis ducimus aperiam ipsa rem vitae,o
                        s nobis reprehenderit illo. Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Minima qui distinctio dicta officia blanditiis vero aliquid ea ullam! Vo
                        luptate atque eligendi modi dignissimos laudantium praesentium corporis corrup
                        ti cum cumque molestias? adipisicing elit. Alias aliquam dolorem amet iste rep
                        ellendus nihil expedita ipsam, iure minima saepe harum molestiae odio nemo rep
                        ellat mollitia, sapiente sint ducimus qui.</p>
                </div>
                <div className="mission-img">
                    <img src={best4} alt="Mission" />
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
import React, { useEffect } from 'react'
import '../../styles/Explore/landing.css'

function Landing({ work }) {
    useEffect(() => {
        const applyTorchEffect = (container) => {
            const torch = container.querySelector('.torch');
            const borderHighlights = ['top', 'right', 'bottom', 'left'].map(side => {
                const highlight = document.createElement('div');
                highlight.className = `border-highlight border-highlight-${side}`;
                container.appendChild(highlight);
                return highlight;
            });

            const handleMouseMove = (e) => {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                torch.style.left = `${x - 150}px`;
                torch.style.top = `${y - 150}px`;
                torch.style.opacity = '1';

                const highlightSize = 150;
                const detectionDistance = 200;

                borderHighlights.forEach((highlight, index) => {
                    let distance, gradientIntensity;
                    switch (index) {
                        case 0:
                            distance = y;
                            highlight.style.width = `${Math.min(highlightSize, rect.width)}px`;
                            highlight.style.left = `${Math.max(0, x - highlightSize / 2)}px`;
                            break;
                        case 1:
                            distance = rect.width - x;
                            highlight.style.height = `${Math.min(highlightSize, rect.height)}px`;
                            highlight.style.top = `${Math.max(0, y - highlightSize / 2)}px`;
                            break;
                        case 2:
                            distance = rect.height - y;
                            highlight.style.width = `${Math.min(highlightSize, rect.width)}px`;
                            highlight.style.left = `${Math.max(0, x - highlightSize / 2)}px`;
                            break;
                        case 3:
                            distance = x;
                            highlight.style.height = `${Math.min(highlightSize, rect.height)}px`;
                            highlight.style.top = `${Math.max(0, y - highlightSize / 2)}px`;
                            break;
                    }

                    gradientIntensity = Math.max(0, 1 - (distance / detectionDistance));
                    highlight.style.background = `radial-gradient(circle, rgba(255, 255, 255, ${gradientIntensity}) 0%, rgba(255, 255, 255, 0) 70%)`;
                    highlight.style.opacity = gradientIntensity > 0 ? '1' : '0';
                });
            };

            const handleMouseLeave = () => {
                torch.style.opacity = '0';
                borderHighlights.forEach(highlight => highlight.style.opacity = '0');
            };

            container.addEventListener('mousemove', handleMouseMove);
            container.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('mouseleave', handleMouseLeave);
                borderHighlights.forEach(highlight => container.removeChild(highlight));
            };
        };

        const objContent = document.querySelector('.secLandingItem.objContent');
        const summaryContent = document.querySelector('.secLandingItem.summaryContent');

        if (objContent) applyTorchEffect(objContent);
        if (summaryContent) applyTorchEffect(summaryContent);

    }, []);
    return (
        <div className="landingContainer" id='landing'>
            <div className="landing_heading">
                <p>{work.heading}</p>
            </div>
            <div className='landing'>
                <div className="secLandingItem summary">
                    <div className='landButton'>
                        <span>Summary</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right" /></svg>
                    </div>
                </div>
                <div className="secLandingItem summaryContent">
                    <div className='content_title'>
                        <span>Summary</span>
                    </div>
                    <p>{work.summaryContent}</p>
                    <div className="torch-container">
                        <div className="torch"></div>
                    </div>
                </div>
                <div className="secLandingItem objContent">
                    <div className='content_title'>
                        <span>Objectives</span>
                    </div>
                    <ul>
                        {work.Objectives.map((obj, index) => (
                            <li key={index}><strong>{obj.title}</strong>: {obj.content}</li>
                        ))}
                    </ul>
                    <div className="torch-container">
                        <div className="torch"></div>
                    </div>
                </div>
                <div className="secLandingItem obj">
                    <div className='landButton'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" data-name="Left" /></svg>
                        <span>Objectives</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
import React from 'react';

export default function About() {
    return (
        <section className="container" style={{ marginTop: '90px' }}>
            <h1 className='text-warning my-4 text-center'>About FrontPage</h1>
            <div className="accordion" id="accordionExample">
                <article className="accordion-item">
                    <header className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            User Friendly
                        </button>
                    </header>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>
                                FrontPage is a user-friendly news app that allows you to browse the latest news from around the world. You can view the latest news from a variety of categories, including business, entertainment, health, science, sports, and technology. You can also view the latest news from a variety of sources, including ABC News, Associated Press, Bloomberg, Business Insider, CNN, Fox News, Google News and many more.
                            </p>
                        </div>
                    </div>
                </article>
                <article className="accordion-item">
                    <header className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free and Open Source
                        </button>
                    </header>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>
                                FrontPage is a free and open source news app that allows you to browse the latest news from around the world. You can view the latest news from a variety of categories, including business, entertainment, health, science, sports, and technology. You can also view the latest news from a variety of sources, including ABC News, Associated Press, Bloomberg, Business Insider, CNN, Fox News, Google News and many more.
                            </p>
                        </div>
                    </div>
                </article>
                <article className="accordion-item">
                    <header className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Feature-rich
                        </button>
                    </header>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>
                                FrontPage is a feature-rich news app that allows you to browse the latest news from around the world. You can view the latest news from a variety of categories, including business, entertainment, health, science, sports, and technology. You can also view the latest news from a variety of sources, including ABC News, Associated Press, Bloomberg, Business Insider, CNN, Fox News, Google News and many more.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}

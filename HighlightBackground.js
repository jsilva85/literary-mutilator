import React from "react";

export const HighlightBackground = () => {
    const highlight = () => {
        document.getElementById("bg-color").style.backgroundColor = "Blue";
    };

    /**
     * Background Color Reset
     * Reset the color of the text background
     **/
    const resetBgColor = () => {
        document.getElementById("bg-color").style.backgroundColor = "Gold";
    };
    return (
        <section>
        <div
    id="bg-color"
    className="custom-panel"
    onMouseOver={highlight}
    onMouseOut={resetBgColor}
        >
        <h2>oderless paint thinner</h2>
    <p>
    I really recommend you use odorless thinner or your spouse is gonna
    run you right out into the yard and you'll be working by yourself. You
    have to make almighty decisions when you're the creator. And just
    raise cain. God gave you this gift of imagination. Use it. What the
    devil. Just go back and put one little more happy tree in there. If
    you've been in Alaska less than a year you're a Cheechako. Here's
    something that's fun. You could sit here for weeks with your one hair
    brush trying to do that - or you could do it with one stroke with an
        almighty brush. Be careful. You can always add more - but you can't
    take it away. See there, told you that would be easy. A fan brush is a
    fantastic piece of equipment. Use it. Make friends with
        </p>
    </div>
    </section>
);
};
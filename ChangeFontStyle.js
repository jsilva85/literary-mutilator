import React from "react";

export const ChangeColorOnClick = () => {
    /**
     * Text Color Changer
     * Changes the color of the paragraph text
     **/
    const textColor = e => {
        document.getElementById("text-color").style.color = "Green";
    };

    /**
     * Reset Text Color
     * Resets the color of the paragraph text
     **/
    const resetTextColor = () => {
        document.getElementById("text-color").style.color = "Yellow";
    };
    return (
        <section>
        <div id="text-color">
        <h2>Bob Ross is the best</h2>
    <p>
    Nice little fluffy clouds laying around in the sky being lazy.
        Exercising the imagination, experimenting with talents, being
        creative; these things, to me, are truly the windows to your soul. The
    only thing worse than yellow snow is green snow. We have no limits to
    our world. We're only limited by our imagination. I was blessed with a
    very steady hand; and it comes in very handy when you're doing these
    little delicate things. We artists are a different breed of people.
        We're a happy bunch. You can create the world you want to see and be a
    part of. You have that power. Let's have a happy little tree in here.
    I started painting as a hobby when I was little. I didn't know I had
    any talent. I believe talent is just a pursued interest. Anybody can
    do what I do. We're not trying to teach you a thing to copy. We're
    just here to teach you a technique, then let you loose into the world.
        Get tough withYou're meant to have fun in life. I really believe that
    if you practice enough you could paint the 'Mona Lisa' with a two-inch
    brush. Don't be bashful drop me a line. Let your imagination be your
    guide. Once you learn the technique, ohhh! Turn you loo it, get
    strong. There are no mistakes. You can fix anything that happens.
        Let's go up in here, and start having some fun Now let's put some
    happy little clouds in here. You have freedom here. The only guide is
    your heart. It is a lot of fun. A little happy sunlight shining
    through there. Let's build an almighty mountain.
    </p>
    </div>
    <button className="btn btn-primary px-1" onClick={textColor}>
        Change Color
    </button>
    <button className="btn btn-primary px-1" onClick={resetTextColor}>
        Reset Color
    </button>
    </section>
);
};

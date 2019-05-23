import React from "react";

export const FindAndReplace = () => {
    /**
     * Find and Replace
     **/
    function findReplace() {
        //grab the original text
        const txt = document.getElementById("find-replace").innerHTML;

        //grab the words to find/replace
        const findWord = document.getElementById("txt-find").value;
        const replaceWord = document.getElementById("txt-replace").value;

        //create a new regex object to use to search for findWord
        //include the g and i modifiers: g is for global, i is for case insensitive
        const re = new RegExp(findWord, "gi");

        //find and replace words in original text using the regex we created
        const newText = txt.replace(re, replaceWord);

        //output the new text to the page
        document.getElementById("find-replace").innerHTML = newText;
    }
    return (
        <section>
        <div id="find-replace">
        <h2>fluffy clouds</h2>
    <p>
    >Let's have a nice tree right here. You can create beautiful things -
    but you have to see them in your mind first. We have a fantastic
    little sky! We tell people sometimes: we're like drug dealers, come
    into town and get everybody absolutely addicted to painting. It
    doesn't take much to get you addicted.ou can spend all day playing
    with mountains. Maybe, just to play a little, we'll put a little tree
    here. Painting should do one thing. It should put happiness in your
    heart. Poor old tree. Let your imagination be your guide. You can get
    away with a lot. Let's put some highlights on these little trees. The
    sun wouldn't forget them. And I know you're saying, 'Oh Bob, you've
    done it this time.' And you may be right. Little short strokes. If I
    paint something, I don't want to have to explain what it is. By now
    you should be quite happy about what's happening here. The very fact
    that you're aware of suffering is enough reason to be overjoyed that
    you're alive and can experience it. Nice little fluffy clouds laying
    around in the sky being lazy. The only prerequisite is that it makes
    you happy. If it makes you happy then it's good. Let's do that again.
        Just a happy little shadow that lives in there. Nature is so
    fantastic, enjoy it. Let it make you happy. Look at them little
    rascals. Don't be bashful drop me a line. Once you learn the
    technique, ohhh! Turn you loose on the world; you become a tiger. Just
    let your mind wander and enjoy. This should make you happy. We have no
    limits to our world. We're only limited by our imagination. You have
    to allow the paint to break to make it beautiful. Everybody's
    different. Trees are different. Let them all be individuals.
    </p>
    </div>
    <div className="row">
        <div className="col-sm-6">
        <div className="form-group">
        <label htmlFor="txt-find">Can't find</label>
    <input
    type="text"
    className="form-control"
    id="txt-find"
    maxLength="25"
        />
        </div>
        <div className="form-group">
        <label htmlFor="txt-replace">Me</label>
        <input
    type="text"
    className="form-control"
    id="txt-replace"
    maxLength="25"
        />
        </div>
        <button
    type="button"
    className="btn btn-primary"
    onClick={findReplace}
        >
        meow!
    </button>
    </div>
    </div>
    </section>
);
};

import IDScreenComponent from './id_screen_component';

export default function (props, ref, key) {
    return IDScreenComponent(props, ref, key, {
        id: 'id-mammal',
        vo: `${CMWN.MEDIA.VO}vo-7-1.mp3`,
        title: `${CMWN.MEDIA.IMAGE}img-7-1.png`,
        correct: `${CMWN.MEDIA.EFFECT}s-7-4.mp3`,
        revealVO: `${CMWN.MEDIA.VO}vo-7-2.mp3`,
        revealContent: (
            <h3>
                A mammal feeds milk to its young<br/>
                and is a warm blooded<br/>
                vertebrate (with a spine).
            </h3>
        ),
        selectables: {
            snake: 'incorrect',
            pelican: 'incorrect',
            dragon: 'incorrect',
            dolphin: 'correct',
        }
    });
}

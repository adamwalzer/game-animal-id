import IDScreenComponent from './id_screen_component';

export default function (props, ref, key) {
    return IDScreenComponent(props, ref, key, {
        id: 'id-reptile',
        vo: `${CMWN.MEDIA.VO}vo-9-1.mp3`,
        title: `${CMWN.MEDIA.IMAGE}img-9-1.png`,
        correct: `${CMWN.MEDIA.EFFECT}drag-correct.mp3`,
        revealVO: `${CMWN.MEDIA.VO}vo-9-2.mp3`,
        revealContent: (
            <h3>A reptile is a cold blooded<br/>vertebrate with dry scaly skin.</h3>
        ),
        selectables: {
            buzzor: 'incorrect',
            alligator: 'correct',
            squid: 'incorrect',
            bat: 'incorrect',
        }
    });
}

import IDScreenComponent from './id_screen_component';

export default function (props, ref, key) {
    return IDScreenComponent(props, ref, key, {
        id: 'id-marsupial',
        vo: `${CMWN.MEDIA.VO}vo-4-1.mp3`,
        title: `${CMWN.MEDIA.IMAGE}img-5-1.png`,
        correct: `${CMWN.MEDIA.EFFECT}drag-correct.mp3`,
        revealVO: `${CMWN.MEDIA.VO}vo-4-2.mp3`,
        revealContent: (
            <h3>
                Marsupials are mammals.<br/>
                When they are born, they are not<br/>
                completely developed.<br/>
                They continue to grow<br/>
                in their mother’s pouch.
            </h3>
        ),
        selectables: {
            koala: 'correct',
            beaver: 'incorrect',
            sloth: 'incorrect',
            ostrich: 'incorrect',
        }
    });
}

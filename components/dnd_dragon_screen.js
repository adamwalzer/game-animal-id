import DropzoneReveal from 'shared/components/dropzone_reveal/0.2';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="dnd-dragon"
        >
            <DropzoneReveal
                ref="dropzone-reveal"
                dropzoneAssets={[
                    <skoash.Audio
                        ref="drag"
                        type="sfx"
                        src={`${CMWN.MEDIA.EFFECT}drag.mp3`}
                    />,
                    <skoash.Audio
                        ref="correct"
                        type="sfx"
                        src={`${CMWN.MEDIA.EFFECT}drag-correct.mp3`}
                    />,
                    <skoash.Audio
                        ref="incorrect"
                        type="sfx"
                        src={`${CMWN.MEDIA.EFFECT}drag-incorrect.mp3`}
                        complete
                    />
                ]}
                dropzones={[
                    <skoash.ListItem answers={['0']} className="elephant animated" />
                ]}
                dropzoneList={[
                    <skoash.ListItem className="dragon animated" message="0" return />,
                    <skoash.ListItem className="turtle animated" message="turtle" return />,
                    <skoash.ListItem className="snake animated" message="snake" return />
                ]}
                revealList={[
                    <skoash.ListItem ref="dragon">
                        <h3>The Komodo dragon<br/> is the largest living lizard<br/> in the world!</h3>
                    </skoash.ListItem>
                ]}
                revealAssets={[
                    <skoash.Audio ref="0" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-21-1.mp3`} />
                ]}
                closeRespond={function () {
                    skoash.trigger('goto', {index: _.parseInt(key) + 1});
                }}
            />
        </skoash.Screen>
    );
}

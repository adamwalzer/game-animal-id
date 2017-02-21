import DropzoneReveal from 'shared/components/dropzone_reveal/0.2';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="dnd-gorilla"
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
                    <skoash.ListItem answers={['0']} className="gorilla animated" />
                ]}
                dropzoneList={[
                    <skoash.ListItem className="panda animated" message="panda" return />,
                    <skoash.ListItem className="gorilla animated" message="0" return />,
                    <skoash.ListItem className="horse animated" message="horse" return />
                ]}
                revealList={[
                    <skoash.ListItem ref="gorilla">
                        <h3>
                            Gorillas are endangered.<br/>
                            Humans destroy their habitats<br/>
                            with farming and deforestation.
                        </h3>
                    </skoash.ListItem>
                ]}
                revealAssets={[
                    <skoash.Audio ref="0" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-23-2.mp3`} />
                ]}
                closeRespond={function () {
                    skoash.trigger('goto', {index: _.parseInt(key) + 1});
                }}
            />
        </skoash.Screen>
    );
}

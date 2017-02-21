import DropzoneReveal from 'shared/components/dropzone_reveal/0.2';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="dnd-lion"
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
                    <skoash.ListItem answers={['0']} className="lion animated" />
                ]}
                dropzoneList={[
                    <skoash.ListItem className="lion animated" message="0" return />,
                    <skoash.ListItem className="tiger animated" message="tiger" return />,
                    <skoash.ListItem className="cat animated" message="cat" return />
                ]}
                revealList={[
                    <skoash.ListItem ref="lion">
                        <h3>
                            African lions live together in<br />
                            groups called “prides” and are<br />
                            the most social of<br />
                            all the big cats.
                        </h3>
                    </skoash.ListItem>
                ]}
                revealAssets={[
                    <skoash.Audio ref="0" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-17-2.mp3`} />
                ]}
                closeRespond={function () {
                    skoash.trigger('goto', {index: _.parseInt(key) + 1});
                }}
            />
        </skoash.Screen>
    );
}

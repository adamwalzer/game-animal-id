import DropzoneReveal from 'shared/components/dropzone_reveal/0.2';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="dnd-sloth"
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
                  <skoash.ListItem answers={['0']} className="sloth animated" />
              ]}
              dropzoneList={[
                  <skoash.ListItem className="pig animated" message="pig" return />,
                  <skoash.ListItem className="mole animated" message="mole" return />,
                  <skoash.ListItem className="sloth animated" message="0" return />
              ]}
              revealList={[
                  <skoash.ListItem ref="sloth">
                      <h3>
                          Say Cheese!<br />
                          The way the three toed sloth's<br />
                          mouth is shaped makes it<br />
                          look like it's always smiling!
                      </h3>
                  </skoash.ListItem>
              ]}
              revealAssets={[
                  <skoash.Audio ref="0" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-18-1.mp3`} />
              ]}
              closeRespond={function () {
                  skoash.trigger('goto', {index: _.parseInt(key) + 1});
              }}
            />
        </skoash.Screen>
    );
}

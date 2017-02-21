export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="flip"
            emitOnComplete={{
                name: 'flip',
            }}
        >
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-25-1.mp3`} />
            <skoash.Component>
              <h3>
                  Thank you for spending time<br/>
                  with us in the Animal Kingdom.<br/>
                  The more you know, the more you care!
              </h3>
              <skoash.Image ref="flip" className="flip animated" src={`${CMWN.MEDIA.IMAGE}flip.png`} />
            </skoash.Component>
        </skoash.Screen>
    );
}

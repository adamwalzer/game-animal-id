import MatchGame from 'shared/components/match_game/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="match-game"
        >
            <skoash.MediaCollection
                play={_.get(props, 'data.audio') || _.get(props, 'data.reveal.open')}
            >
                <skoash.Audio
                    ref="frog"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-13-5.mp3`}
                    delay={500}
                />
                <skoash.Audio
                    ref="robin"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-13-6.mp3`}
                    delay={500}
                />
                <skoash.Audio
                    ref="fox"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-13-7.mp3`}
                    delay={500}
                />
                <skoash.Audio
                    ref="dove"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-13-8.mp3`}
                    delay={500}
                />
                <skoash.Audio
                    ref="cow"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-13-9.mp3`}
                    delay={500}
                />
                <skoash.Audio
                    ref="hummingbird"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-13-10.mp3`}
                    delay={500}
                />
                <skoash.Audio
                    ref="rhino"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-13-11.mp3`}
                    delay={500}
                />
                <skoash.Audio
                    ref="correct"
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}s-15-1.mp3`}
                    onPlay={function () {
                        this.updateScreenData({
                            key: 'audio',
                            data: null,
                        });
                    }}
                />
            </skoash.MediaCollection>
            <MatchGame
                onSelect={function () {
                    this.updateScreenData({
                        key: 'audio',
                        data: 'correct',
                    });
                }}
                bin={
                    <skoash.Randomizer
                        bin={[
                            <skoash.ListItem
                                message="frog"
                                className="frog flip-container vertical animated"
                            >
                                <skoash.Component className="flipper">
                                    <skoash.Component className="animated front" />
                                    <skoash.Component className="animated back" />
                                </skoash.Component>
                            </skoash.ListItem>,
                            <skoash.ListItem
                                message="frog"
                                className="lily-pad flip-container vertical animated"
                            >
                                <skoash.Component className="flipper">
                                    <skoash.Component className="animated front" />
                                    <skoash.Component className="animated back" />
                                </skoash.Component>
                            </skoash.ListItem>,
                            <skoash.ListItem
                                message="cow"
                                className="cow flip-container vertical animated"
                            >
                                <skoash.Component className="flipper">
                                    <skoash.Component className="animated front" />
                                    <skoash.Component className="animated back" />
                                </skoash.Component>
                            </skoash.ListItem>,
                            <skoash.ListItem
                                message="cow"
                                className="grass flip-container vertical animated"
                            >
                                <skoash.Component className="flipper">
                                    <skoash.Component className="animated front" />
                                    <skoash.Component className="animated back" />
                                </skoash.Component>
                            </skoash.ListItem>,
                            <skoash.ListItem
                                message="robin"
                                className="robin flip-container vertical animated"
                            >
                                <skoash.Component className="flipper">
                                    <skoash.Component className="animated front" />
                                    <skoash.Component className="animated back" />
                                </skoash.Component>
                            </skoash.ListItem>,
                            <skoash.ListItem
                                message="robin"
                                className="worm flip-container vertical animated"
                            >
                                <skoash.Component className="flipper">
                                    <skoash.Component className="animated front" />
                                    <skoash.Component className="animated back" />
                                </skoash.Component>
                            </skoash.ListItem>,
                            <skoash.ListItem
                                message="fox"
                                className="fox flip-container vertical animated"
                            >
                                <skoash.Component className="flipper">
                                    <skoash.Component className="animated front" />
                                    <skoash.Component className="animated back" />
                                </skoash.Component>
                            </skoash.ListItem>,
                            <skoash.ListItem
                                message="fox"
                                className="mouse flip-container vertical animated"
                            >
                                <skoash.Component className="flipper">
                                    <skoash.Component className="animated front" />
                                    <skoash.Component className="animated back" />
                                </skoash.Component>
                            </skoash.ListItem>,
                            <skoash.ListItem
                                message="dove"
                                className="dove flip-container vertical animated"
                            >
                                <skoash.Component className="flipper">
                                    <skoash.Component className="animated front" />
                                    <skoash.Component className="animated back" />
                                </skoash.Component>
                            </skoash.ListItem>,
                            <skoash.ListItem
                                message="dove"
                                className="cactus flip-container vertical animated"
                            >
                                <skoash.Component className="flipper">
                                    <skoash.Component className="animated front" />
                                    <skoash.Component className="animated back" />
                                </skoash.Component>
                            </skoash.ListItem>,
                            <skoash.ListItem
                                message="hummingbird"
                                className="humming-bird flip-container vertical animated"
                            >
                                <skoash.Component className="flipper">
                                    <skoash.Component className="animated front" />
                                    <skoash.Component className="animated back" />
                                </skoash.Component>
                            </skoash.ListItem>,
                            <skoash.ListItem
                                message="hummingbird"
                                className="honeysuckle flip-container vertical animated"
                            >
                                <skoash.Component className="flipper">
                                    <skoash.Component className="animated front" />
                                    <skoash.Component className="animated back" />
                                </skoash.Component>
                            </skoash.ListItem>,
                            <skoash.ListItem
                                message="rhino"
                                className="rhino flip-container vertical animated"
                            >
                                <skoash.Component className="flipper">
                                    <skoash.Component className="animated front" />
                                    <skoash.Component className="animated back" />
                                </skoash.Component>
                            </skoash.ListItem>,
                            <skoash.ListItem
                                message="rhino"
                                className="oxpecker flip-container vertical animated"
                            >
                                <skoash.Component className="flipper">
                                    <skoash.Component className="animated front" />
                                    <skoash.Component className="animated back" />
                                </skoash.Component>
                            </skoash.ListItem>
                        ]}
                    />
                }
            />
            <skoash.Reveal
                openTarget="reveal"
                openReveal={_.get(props, 'data.match-game.message')}
                list={[
                    <skoash.ListItem
                        data-ref="frog"
                        className="frog"
                    >
                        <skoash.Image
                            data-ref="frog-thumb"
                            className="thumb"
                            src={`${CMWN.MEDIA.IMAGE}img-13-2.png`}
                        />
                        <skoash.Image
                            data-ref="frog-banner"
                            className="banner"
                            src={`${CMWN.MEDIA.IMAGE}img-13-3.png`}
                        />
                        <p>
                            The frog is cold blooded so it sits<br/>
                            on lily pads in the sun to raise<br/>
                            its core temperature.
                        </p>
                    </skoash.ListItem>,
                    <skoash.ListItem
                        data-ref="robin"
                        className="robin"
                    >
                        <skoash.Image
                            data-ref="robin-thumb"
                            className="thumb"
                            src={`${CMWN.MEDIA.IMAGE}img-13-4.png`}
                        />
                        <skoash.Image
                            data-ref="robin-banner"
                            className="banner"
                            src={`${CMWN.MEDIA.IMAGE}img-13-5.png`}
                        />
                        <p>
                            Earthworms are part of a<br/>
                            robin’s diet along with blueberries,<br/>
                            caterpillars and poison ivy!
                        </p>
                    </skoash.ListItem>,
                    <skoash.ListItem
                        data-ref="fox"
                        className="fox"
                    >
                        <skoash.Image
                            data-ref="fox-thumb"
                            className="thumb"
                            src={`${CMWN.MEDIA.IMAGE}img-13-6.png`}
                        />
                        <skoash.Image
                            data-ref="fox-banner"
                            className="banner"
                            src={`${CMWN.MEDIA.IMAGE}img-13-7.png`}
                        />
                        <p>
                            The fox has a seasonal diet. In the summer he<br/>
                            enjoys grasshoppers, beetles, berries and nuts.<br/>
                            But come winter mice need to watch out!<br/>
                            They go to the top of the menu.
                        </p>
                    </skoash.ListItem>,
                    <skoash.ListItem
                        data-ref="dove"
                        className="dove"
                    >
                        <skoash.Image
                            data-ref="dove-thumb"
                            className="thumb"
                            src={`${CMWN.MEDIA.IMAGE}img-13-8.png`}
                        />
                        <skoash.Image
                            data-ref="dove-banner"
                            className="banner"
                            src={`${CMWN.MEDIA.IMAGE}img-13-9.png`}
                        />
                        <p>
                            The dove pollinates the cactus by<br/>
                            drinking its nectar and eating and<br/>
                            spreading its seeds. These two<br/>
                            depend on each other.
                        </p>
                    </skoash.ListItem>,
                    <skoash.ListItem
                        data-ref="cow"
                        className="cow"
                    >
                        <skoash.Image
                            data-ref="cow-thumb"
                            className="thumb"
                            src={`${CMWN.MEDIA.IMAGE}img-13-10.png`}
                        />
                        <skoash.Image
                            data-ref="cow-banner"
                            className="banner"
                            src={`${CMWN.MEDIA.IMAGE}img-13-11.png`}
                        />
                        <p>
                            The cow eats the grass. It digests it<br/>
                            in a huge stomach with 4 pouches.<br/>
                            The largest is the size of<br/>
                            a 55 gallon can!
                        </p>
                    </skoash.ListItem>,
                    <skoash.ListItem
                        data-ref="humming-bird"
                         className="humming-bird"
                    >
                        <skoash.Image
                            data-ref="hummingbird-thumb"
                            className="thumb"
                            src={`${CMWN.MEDIA.IMAGE}img-13-12.png`}
                        />
                        <skoash.Image
                            data-ref="hummingbird-banner"
                            className="banner"
                            src={`${CMWN.MEDIA.IMAGE}img-13-13.png`}
                        />
                        <p>
                            The hummingbird hovers next to the<br/>
                            flower to eat the nectar, which is so<br/>
                            sweet it’s like liquid candy!
                        </p>
                    </skoash.ListItem>,
                    <skoash.ListItem
                        data-ref="rhino"
                        className="rhino"
                    >
                        <skoash.Image
                            data-ref="rhino-thumb"
                            className="thumb"
                            src={`${CMWN.MEDIA.IMAGE}img-13-14.png`}
                        />
                        <skoash.Image
                            data-ref="rhino-banner"
                            className="banner"
                            src={`${CMWN.MEDIA.IMAGE}img-13-15.png`}
                        />
                        <p>
                            The oxpecker perches on the<br/>
                            rhino’s back. It helps the rhino by eating<br/>
                            its parasites and warning it of predators.
                        </p>
                    </skoash.ListItem>
                ]}
            />
        </skoash.Screen>
    );
}

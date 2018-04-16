import { createElement, Component } from "metaverse-api";

export default class HouseScene extends Component {
    state = {
        isDoorClosed: false
    };

    componentDidMount() {
        this.eventSubscriber.on("door_click", () => {
            this.setState({ isDoorClosed: !this.state.isDoorClosed });
        });
    }

    async render() {
        const doorRotation = {
            x: 0,
            y: this.state.isDoorClosed ? 0 : 90,
            z: 0
        };

        return (
            <a-scene position={{ x: 5, y: 0, z: 5 }}>
                <a-entity rotation={doorRotation} transition={{ rotation: { duration: 1000, timing: "ease-in" } }}>
                    <a-box id="door" scale={{ x: 1, y: 2, z: 0.05 }} position={{ x: 0.5, y: 1, z: 0 }} color="brown" />
                </a-entity>
                <a-box position={{ x: 2, y: 1, z: 0 }} scale={{ x: 2, y: 2, z: 0.05 }} color="blue" />
                <a-box position={{ x: -1, y: 1, z: 0 }} scale={{ x: 2, y: 2, z: 0.05 }} color="blue" />
            </a-scene>
        );
    }
}

import { expect } from "chai";
import {
    distance,
    splitOnLatLon,
    toDecimal,
    haversine
} from "../";

describe("The captain's distance", function() {

    it("calculates the distance between two points", () => {
        expect(distance(
            "48° 12′ 30″ N, 16° 22′ 23″ E",
            "48° 12′ 30″ N, 16° 22′ 23″ E"
        )).to.equal(0);

        expect(distance(
            "48° 12′ 30″ N, 16° 22′ 23″ E",
            "23° 33′ 0″ S, 46° 38′ 0″ W"
        )).to.equal(10130);

        expect(distance(
            "48° 12′ 30″ N, 16° 22′ 23″ E",
            "58° 18′ 0″ N, 134° 25′ 0″ W"
        )).to.equal(7870);
    });

    it("splits on lat/lon", () => {
        expect(splitOnLatLon("48° 12′ 30″ N, 16° 22′ 23″ E")).to.deep.equal([
            "48° 12′ 30″ N",
            "16° 22′ 23″ E"
        ]);
    });

    it("converts dms to decimal format", () => {
        expect(toDecimal("48° 12′ 30″ N")).to.be.closeTo(0.841, 0.001);
        expect(toDecimal("48° 12′ 30″ S")).to.be.closeTo(-0.841, 0.001);
        expect(toDecimal("16° 22′ 23″ E")).to.be.closeTo(0.285, 0.001);
        expect(toDecimal("16° 22′ 23″ W")).to.be.closeTo(-0.285, 0.001);
    });

    it("calculates distance using the haversine formula", () => {
        expect(haversine(
            48.2083, 16.3730,
            48.2083, 16.3730,
            6371
        )).to.be.closeTo(0, 0.001);

        expect(haversine(
            48.2083, 16.3730,
            16.3730, 48.2083,
            6371
        )).to.be.closeTo(3133.445, 0.001);
    });

});

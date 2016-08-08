import _ from "lodash";

export function splitOnLatLon(coord) {
    return _.chain(coord)
        .split(",")
        .map(_.trim)
        .value();
}

export function distance(coord1, coord2) {
    return 0;
}

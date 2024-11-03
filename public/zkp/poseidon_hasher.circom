pragma circom 2.0.0;

include "../node_modules/circomlib/circuits/poseidon.circom";

template PoseidonHasher(n) {
    signal input in[n];
    signal input hash;

    component poseidon = Poseidon(n);
    for (var i = 0; i < n; i++) {
        poseidon.inputs[i] <== in[i];
    }
    hash === poseidon.out;
}

component main {public [hash]} = PoseidonHasher(16);
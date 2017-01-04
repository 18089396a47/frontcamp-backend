module.exports = function checkId(id) {
    return parseInt(id) || id === '0';
};
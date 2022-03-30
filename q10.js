var isMatch = function (s, p) {
    const t = s.match(p)
    if (t)
        return t[0] == s
    return false
};
#-*- coding: utf-8 -*-


def solve(brackets):
    stack = []
    sub = [[]]
    for s in brackets:
        if s in '[(':
            stack.append(s)
            sub.append([])
        elif s in ')]' and 0 < len(stack) and abs(ord(s) - ord(stack[-1])) < 3:
            stack.pop()
            cur = sub.pop()
            p = 2 if ')' == s else 3
            sub[-1].append(max(p, sum(cur) * p))
        else:
            return 0
    return sum(sub[0])


def shortver(args):
    s = []
    c = [[]]
    f = 0
    for i in args:
        a = i == ']'
        if i in'([':
            s += [i]
            c += [[]]
        elif s[-1] == '(['[a]:
            s.pop()
            b = sum(c.pop())
            c[-1] += [max(b, 1) * (2 + a)]
        else:
            f = 1
    return [sum(c[0]), 0][f]


i = input()
print(solve(i))

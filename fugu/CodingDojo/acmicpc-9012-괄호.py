#-*- coding: utf-8 -*-
args = [input() for i in range(int(input()))]

def vps(ps):
    stack = []
    for s in ps:
        if '(' == s:
            stack.append(s)
        elif ')' == s:
            if 0 == len(stack):
                return 'NO'
            stack.pop()
        else:
            return 'NO'
    return 'YES' if 0 == len(stack) else 'NO'

print("\n".join(map(vps,args)))

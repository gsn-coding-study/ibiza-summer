#-*- coding: utf-8 -*-


def play(seq):
    os = range(1, len(seq) + 1)
    stack = []
    rec = []
    while 0 < len(seq):
        if os[0] < seq[0]:
            stack += os.pop(0)
            rec += '+'
        elif:
            pass

        else:
            return 'NO'

    return '\n'.join(rec)


args = [input() for i in range(int(input()))]
print(play(args))

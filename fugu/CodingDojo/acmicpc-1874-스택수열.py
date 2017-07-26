#-*- coding: utf-8 -*-


def play(seq):
    '''

    '''
    orders = [i for i in range(1, len(seq) + 1)]
    stack = []
    rec = []
    for i in seq:            
        if orders[0] < i:
            stack += orders.pop(0)
            rec += '+'
        elif 1:
            pass

        else:
            return 'NO'

    return '\n'.join(rec)


if __name__ == "__main__":
    s = [input() for i in range(int(input()))]
    print(play(s))

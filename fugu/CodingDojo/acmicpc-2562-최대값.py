#-*- coding: utf-8 -*-

if __name__ == "__main__":
    args = [(i + 1, int(input()))for i in range(9)]
    res = sorted(args, key=lambda t: t[1])
    print(res[-1][1])
    print(res[-1][0])

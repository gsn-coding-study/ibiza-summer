#-*- coding: utf-8 -*-


def collatz(num):
    for i in range(500):
        num = num / 2 if 0 == num % 2 else num * 3 + 1
        if 1 == num:
            return i + 1
    return -1


# 아래는 테스트로 출력해 보기 위한 코드입니다.
print(collatz(6))

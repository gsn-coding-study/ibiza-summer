#-*- coding: utf-8 -*-
def even(i):
    return 0 == i % 2


def find_multiple_int(n, i):
    while 0 != n % i and n < 27:
        n += 10
    return n


def restore(isbn):
    chksum = int(isbn[-1])
    total = 0
    is_even = True

    for i, v in enumerate(isbn[0:-1]):
        if v.isnumeric():
            v = int(v)
            total += (v if even(i) else v * 3)
        else:
            is_even = even(i)
    x = (10 - (total + chksum) % 10) % 10
    return x if is_even else int(find_multiple_int(x, 3) / 3)


if __name__ == "__main__":
    print(restore(list(input())))

# test code for pytest
import random

def random_isbn():
    isbn = random.choices("0123456789", k=12)
    total = 0
    for i, v in enumerate(isbn):
        v = int(v)
        total += (v if even(i) else v * 3)
    chksum = (10 - total) % 10
    isbn.append(str(chksum))
    return isbn

def test_restore():
    for i in range(100):
        isbn = random_isbn()
        print(isbn)
        for i in range(len(isbn) - 1):
            sample = list(isbn)
            expact = sample[i]
            sample[i] = "*"
            assert restore(sample) == int(expact)

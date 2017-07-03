def number_generator(x, n):
    # 함수를 완성하세요
    return [i for i in range(x, x * n + 1, x)]


# 아래는 테스트로 출력해 보기 위한 코드입니다.
print(number_generator(2, 5))
print(number_generator(3, 5))
print(number_generator(4, 3))

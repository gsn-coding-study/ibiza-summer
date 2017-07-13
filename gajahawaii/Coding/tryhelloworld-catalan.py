# 카탈랑 방식
# http://suhak.tistory.com/77
from math import factorial as f
def parenthesisCase(n):
    return f(2*n)//(f(n)**2*(n+1))



# 실행을 위한 테스트코드입니다.
if parenthesisCase(3) == 5:
    print("parenthesisCase(3)이 정상 동작합니다. 제출을 눌러서 다른 경우에도 정답인지 확인해 보세요.")
else:
    print("parenthesisCase(3)이 정상 동작하지 않습니다.")
    
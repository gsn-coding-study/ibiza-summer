import math
def string_middle(str):
    # 함수를 완성하세요
    size = len(str)    
    l = (size-1) //2
    r = (size+2) //2    
    return str[l:r]

# 아래는 테스트로 출력해 보기 위한 코드입니다.
print(string_middle("powerpower"))
print(string_middle("power"))
print(string_middle("test"))
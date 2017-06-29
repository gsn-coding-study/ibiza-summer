sugarWeight = int(input())
fiveBag = sugarWeight // 5
remainWeight = sugarWeight % 5
threeBag = 0

if (remainWeight != 0): 
    # five + three
    while (fiveBag >= 0):
        if (remainWeight%3 == 0):
            threeBag += (remainWeight//3)
            remainWeight = remainWeight%3
            break;
        else :
            fiveBag -= 1
            remainWeight += 5
 
if (remainWeight == 0):     
    print(fiveBag + threeBag)
else :
    print(-1)

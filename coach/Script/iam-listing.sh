#!/bin/bash

for name in {aws iam list-users --query "Users[].[UserName]" --output text}; do 
aws iam list-access-keys --user-name "$name" --query AccesskeyMetedata[*].[UserName,CreateDate]; 
done

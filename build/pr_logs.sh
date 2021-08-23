#!/bin/bash
headline="| Pull Request: $SYSTEM_PULLREQUEST_SOURCEBRANCH --> $SYSTEM_PULLREQUEST_TARGETBRANCH |"
counter=0
until [[ counter -gt ${#headline}-1 ]]; do
    echo -e "-\c"
    ((counter++))
done
counter=0
echo -e "\n$headline"
until [[ counter -gt ${#headline}-1 ]]; do
    echo -e "-\c"
    ((counter++))
done
echo ""
echo "Request ID            : $SYSTEM_PULLREQUEST_PULLREQUESTID."
echo "Request Number        : $SYSTEM_PULLREQUEST_PULLREQUESTNUMBER."
echo "Source Branch         : $SYSTEM_PULLREQUEST_SOURCEBRANCH."
echo "Target Branch         : $SYSTEM_PULLREQUEST_TARGETBRANCH."
echo "Source Repository URI : $SYSTEM_PULLREQUEST_SOURCEREPOSITORYURI."

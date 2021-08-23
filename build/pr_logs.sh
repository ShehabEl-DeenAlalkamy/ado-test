#!/bin/bash
headline="Pull Request: $SYSTEM_PULLREQUEST_SOURCEBRANCH --> $SYSTEM_PULLREQUEST_TARGETBRANCH:-"
counter=0
until [ $counter -gt ${#headline} ]; do
    echo "-"
    ((counter++))
done
echo -e "\nID                    : $SYSTEM_PULLREQUEST_PULLREQUESTID."
echo "Source                : $SYSTEM_PULLREQUEST_SOURCEBRANCH."
echo "Target                : $SYSTEM_PULLREQUEST_TARGETBRANCH."
echo "Request Number        : $SYSTEM_PULLREQUEST_PULLREQUESTNUMBER."
echo "Source Repository URI : $SYSTEM_PULLREQUEST_SOURCEREPOSITORYURI."

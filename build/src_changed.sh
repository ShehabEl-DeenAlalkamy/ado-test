#!/bin/bash
[[ $1 == *"/"* ]] && PATH_FILTER=$1 || PATH_FILTER="$1/"
CHANGED_FILES=$(git diff HEAD HEAD~ --name-only)
MATCH_COUNT=0

echo "Checking for file changes..."
for FILE in $CHANGED_FILES; do
    if [[ $FILE == *$PATH_FILTER* ]]; then
        echo "[MATCHED]..${FILE} changed"
        MATCH_COUNT=$((MATCH_COUNT + 1))
    else
        echo "[IGNORED]..${FILE} changed"
    fi
done

echo "----------------------------------------------------------------------------------------"
echo -e "$MATCH_COUNT match(es) for filter $PATH_FILTER found.\n"
if [[ $MATCH_COUNT -gt 0 ]]; then
    echo "##vso[task.setvariable variable=SOURCE_CODE_CHANGED;isOutput=true]true"
else
    echo "##vso[task.setvariable variable=SOURCE_CODE_CHANGED;isOutput=true]false"
fi

INSERT INTO [dbo].[MST_ACCOUNT_DETAILS]
    (
        [ACCOUNT_TYPE],
        [ACCOUNT_NAME],
        [BANK_NAME],
        [ACCOUNT_NO],
        [IFSC_CODE],
        [BRANCH],
        [IND_CITIZEN],
        [IND_STUDENT],
        [FOREIGN_CITIZEN],
        [FOREIGN_STUDENT],
        [CREATED_AT],
        [UPDATED_AT],
        [PLACE_ID]
    )
VALUES 
    (
        @ACCOUNT_TYPE,
        @ACCOUNT_NAME,
        @BANK_NAME,
        @ACCOUNT_NO,
        @IFSC_CODE,
        @BRANCH,
        @IND_CITIZEN,
        @IND_STUDENT,
        @FOREIGN_CITIZEN,
        @FOREIGN_STUDENT,
        @CREATED_AT,
        @UPDATED_AT,
        @PLACE_ID
    )

SELECT SCOPE_IDENTITY() AS P_ID

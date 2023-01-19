INSERT INTO [dbo].[TBL_BOOKING]
    (
        [SSOID],
        [NUMBER_OF_VISITORS],
        [VISIT_DATE],
        [TKT_AMT],
        [TOTAL_TKT_AMT],
        [CREATED_DATE],
        [INDIAN_CITIZEN],
        [INDIAN_STUDENT],
        [FOREIGNER_STUDENT],
        [FOREIGNER_CITIZEN],
        [GST],
        [EMAIL_ID],
        [MOBILE_NO]
    )
VALUES 
    (
        @SSOID,
        @NUMBER_OF_VISITORS,
        @VISIT_DATE,
        @TKT_AMT,
        @CREATED_DATE,
        @TOTAL_TKT_AMT,
        @INDIAN_CITIZEN,
        @INDIAN_STUDENT,
        @FOREIGNER_STUDENT,
        @FOREIGNER_CITIZEN,
        @GST,
        @EMAIL_ID,
        @MOBILE_NO
    )

SELECT SCOPE_IDENTITY() AS P_ID

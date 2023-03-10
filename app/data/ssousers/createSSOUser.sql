INSERT INTO [dbo].[SSO_USER]
    (
        [SSOID],
        [USER_NAME],
        [MOBILE_NUMBER],
        [USER_ROLE],
        [MAIL_ID],
        [GENDER],
        [POSTAL_ADDRESS],
        [IDENTITY_PROOF_TYPE],
        [IDENTITY_PROOF_NUMBER],
        [CITY],
        [STATE],
        [LOGIN_DATE],
        [UPDATED_DATE],
        [REMARKS],
        [VISITOR_FORM_TYPE],
        [HELP_DESK_NO],
        [WINTER_SESSION_START_TIME],
        [WINTER_SESSION_END_TIME],
        [SUMMER_SESSION_START_TIME],
        [SUMMER_SESSION_END_TIME],
        [HOLIDAYS_DATE]
    )
VALUES 
    (
        @SSOID,
        @USER_NAME,
        @MOBILE_NUMBER,
        @USER_ROLE,
        @MAIL_ID,
        @GENDER,
        @POSTAL_ADDRESS,
        @IDENTITY_PROOF_TYPE,
        @IDENTITY_PROOF_NUMBER,
        @CITY,
        @STATE,
        @LOGIN_DATE,
        @UPDATED_DATE,
        @REMARKS,
        @VISITOR_FORM_TYPE,
        @HELP_DESK_NO,
        @WINTER_SESSION_START_TIME,
        @WINTER_SESSION_END_TIME,
        @SUMMER_SESSION_START_TIME,
        @SUMMER_SESSION_END_TIME,
        @HOLIDAYS_DATE
    )

SELECT SCOPE_IDENTITY() AS id
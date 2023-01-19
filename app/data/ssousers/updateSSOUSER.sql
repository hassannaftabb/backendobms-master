UPDATE [dbo].[ssousers]
SET [ssoId]=@ssoId,
        [password]=@password,
        [name]=@name,
        [contactNo]=@contactNo,
        [emailId]=@emailId,
        [bookingFor]=@bookingFor,
        [visitorFormTypeFile]=@visitorFormTypeFile,
        [helpDeskNo]=@helpDeskNo,
        [role]=@role,
        [winterSessionStartTime]=@winterSessionStartTime,
        [winterSessionEndTime]=@winterSessionEndTime,
        [summerSessionStartTime]=@summerSessionStartTime,
        [summerSessionEndTime]=@summerSessionEndTime,
        [holidaySession]=@holidaySession,
        [placeId]=@placeId
WHERE [ssoId]=@ssoId

SELECT * FROM [dbo].[ssousers] WHERE [ssoId]=@ssoId
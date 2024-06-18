# gRPC Protocol Documentation

This file describes the content of session_key.proto.

 <!-- end services -->



### IncompleteUserOp



| Field | Type | Description |
| ----- | ---- | ----------- |
| sender | [string](#string) |  |
| nonce | [int64](#int64) |  |
| init_code | [string](#string) |  |
| call_data | [string](#string) |  |
| call_gas_limit | [int64](#int64) |  |
| verification_gas_limit | [int64](#int64) |  |
| pre_verification_gas | [int64](#int64) |  |
| max_fee_per_gas | [int64](#int64) |  |
| max_priority_fee_per_gas | [int64](#int64) |  |
| paymaster_and_data | [string](#string) |  |
| signature | [string](#string) |  |







### ParamRule



| Field | Type | Description |
| ----- | ---- | ----------- |
| condition | [ParamCondition](#paramcondition) |  |
| param | [string](#string) |  |







### SessionKeyPermission



| Field | Type | Description |
| ----- | ---- | ----------- |
| target | [string](#string) |  |
| function_abi | [string](#string) |  |
| value_limit | [string](#string) |  |
| param_rules | [ParamRule](#paramrule) |  |





 <!-- end messages -->



### ParamCondition


| Name | Number | Description |
| ---- | ------ | ----------- |
| PARAM_CONDITION_UNSPECIFIED | 0 |  |
| PARAM_CONDITION_EQUAL | 1 |  |
| PARAM_CONDITION_GREATER_THAN | 2 |  |
| PARAM_CONDITION_LESS_THAN | 3 |  |
| PARAM_CONDITION_GREATER_THAN_OR_EQUAL | 4 |  |
| PARAM_CONDITION_LESS_THAN_OR_EQUAL | 5 |  |
| PARAM_CONDITION_NOT_EQUAL | 6 |  |


 <!-- end enums -->

 <!-- end HasExtensions -->



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |
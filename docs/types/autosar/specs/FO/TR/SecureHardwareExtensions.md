# Specification of Secure Hardware Extensions (`SecureHardwareExtensions`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | TR — 技术报告（Technical Report） |
| UID | 948 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_TR_SecureHardwareExtensions_948\AUTOSAR_FO_TR_SecureHardwareExtensions.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_TR_SecureHardwareExtensions_948\AUTOSAR_FO_TR_SecureHardwareExtensions.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_TR_SecureHardwareExtensions_948\zzgen\FO_TR_SecureHardwareExtensions.complete.txt`

## 文档简介

This technical report represents a republication under AUTOSAR development partnership of HIS SHE - Functional Specification v1.1, rev 439 specification. Errata and amendments to this specification are published in AUTOSAR_TR_ListOfKnownIssuesSecureHardwareExtensions.pdf document.

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

This technical report represents a republication under AUTOSAR development partnership of HIS SHE - Functional Specification v1.1, rev 439 specification. Errata and amendments to this specification are published in AUTOSAR_TR_ListOfKnownIssuesSecureHardwareExtensions.pdf document.

### 2. 术语与缩略语定义
*原文标题：Definition of terms and acronyms*

A general list of acronyms and abbreviations is available in .

| Abbreviation / Acronym: | Description: |
|---|---|
| HIS | Hersteller Initiative Software |
| SHE | Security Hardware Extension |
| AES | Advanced Encryption Standard |
| TPM | Trusted Platform Module |
| CBC | Cipher Block Chaining |
| ECB | Electronic Code Book |
| MAC | Message Authentication Code |
| CMAC | Cipher-based Message Authentication Code |
| IV | Initialization Vector |
| UID | Unique IDentification item |
| TRNG | True Random Number Generator |
| PRNG | Pseudo Random Number Generator |

### 3. 相关文档
*原文标题：Related Documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 功能规范
*原文标题：Functional specification*

### 6. 简介
*原文标题：Introduction*

The Secure Hardware Extension (SHE) is an on-chip extension to any given microcontroller. It is intended to move the control over cryptographic keys from the software domain into the hardware domain and therefore protect those keys from software attacks. However, it is not meant to replace highly secure solutions like TPM chips or smart cards, i.e. no tamper resistance is required by the specification.

The main goals for the design at hand are

* Protect cryptographic keys from software attacks
* Provide an authentic software environment
* Let the security only depend on the strength of the underlying algorithm and the confidentiality of the keys
* Allow for distributed key ownerships
* Keep the flexibility high and the costs low

Basically SHE consists of three building blocks, a storage area to keep the cryptographic keys and additional corresponding information, a implementation of a block cipher (AES) and a control logic connecting the parts to the CPU of the microcontroller, see  for a simplified block diagram. SHE can be implemented in several ways, e.g. a finite state machine or a small, dedicated CPU core.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. Conventions

In the following chapters several paragraphs are printed italic. These paragraphs are not meant as a hard requirement but to provide additional explanation of the underlying mechanisms.

Throughout the whole document the term "CPU" denotes the actual microprocessor while "microcontroller" is used to describe the hardware complete chip, i.e. a CPU and all included peripherals. The term "control logic" refers to the system (e.g. a finite state machine or a small microprocessor) controlling the algorithms and memories inside of SHE.

Cryptographic operations are written as

OUTPUT = OPERATION_{\texttt{MODE,KEY[,IV]}} (INPUT [, INPUT2, ...])

Additionally the following symbols are used to describe the operations:

| \oplus bitwise exclusive or | concatenation of two values |
|---|---|

Whenever interfaces to the CPU are described the internal memory slots of SHE, which are not exposed to the CPU, are identified by their address. An actual key is generally written as KEY_{\texttt{KEY\_NAME}} while the identifier of the key is written as ID_{\texttt{KEY\_NAME}}.

All values are given in the form MSB...LSB, i.e. the most significant bit/byte is on the left.

Bit sequences given in the form

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. 基础需求
*原文标题：Basic Requirements*

SHE has to be realized as an on-chip peripheral of the microcontroller. SHE must not have any other connections except those explicitly specified within this document. If additional resources have to be included to assure proper function during the fabrication of the chip, all ports have to be physically and permanently deactivated if accessible on external pins.

SHE can be connected to the CPU in several ways, e.g. through a dedicated interface or an internal peripheral bus. The interconnection must be implemented in a way that no other peripheral or an external entity can modify the data transferred between the CPU and SHE.

SHE does not need to be fabricated in a special process to increase security nor need any actions to be taken to strengthen the system against physical attacks, e.g. etching the chip casing open, differential power analysis, glitching attacks.

Note: No sophisticated secure hardware mechanisms are required to meet the specification of SHE. However, a manufacturer may of course strengthen the design to provide a higher security level for higher security requirements.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. Algorithms

All cryptographic operations of SHE are processed by an AES-128 . The latency of the AES must remain <2us per encryption/decryption of a single block, including the key schedule.

Additionally, the performance of the AES must be high enough to allow for a secure boot (see Chapter  for details) of 5% of the flash memory, but 32kByte at minimum and 128kByte at maximum, of the microcontroller in <10ms.

In case the flash memory is slower than requested, the flash memory must be the limiting factor for the secure boot and the limit has to be stated in the datasheet.

### 10. Encryption/decryption

For encryption and decryption of data, SHE has to support the electronic cipher book mode (ECB) for processing single blocks of data and the cipher block chaining mode (CBC) for processing larger amounts of data, see  for details.

The latency for both modes may not exceed the value given in the beginning of

SHE can only process multiples of the block length of the AES, i.e. all necessary padding has to be done by an application.

The input, output and key input as well as any intermediate results may not be directly accessible by the CPU but access must be granted depending on the policies by the controller logic of SHE.

### 11. MAC generation/verification

The MAC generation and verification has to be implemented as a CMAC using the AES-128 as specified by . See  for updated examples.

### 12. Compression 功能
*原文标题：Compression function*

The Miyaguchi-Preneel construction (see  Algorithm 9.43) with the AES as block cipher is used as compression function within SHE. Messages have to be preprocessed before feeding them to the compression algorithm, i.e. they have to be padded and parsed into 128 bit chunks.

Padding is done by appending one '1' bit to the message M of bit-length l, followed by k '0' bits, where k is the smallest, non-negative solution to the equation l + 1 + k \equiv 88\ \textrm{mod}\ 128. Finally append a 40 bit block that is equal to the number l expressed using an unsigned binary representation.

Before feeding the padded message to the compression function, it has to be parsed into n 128 bit chunks x_1, x_2, ..., x_n. The value \textrm{OUT}_0 is called initialization vector (IV).

\texttt{AES-MP}(x_i): \textrm{OUT}_i = \textrm{ENC}_{\textrm{ECB, OUT}_{i-1}}(x_i) \oplus x_i \oplus \textrm{OUT}_{i-1};\ i>0;\ \textrm{OUT}_0 = 0;

### 13. Key derivations

Keys are derived using the Miyaguchi-Preneel compression algorithm based on . Derived keys are calculated by compressing the correctly preprocessed concatenation of a secret K and a constant C' with

| C' = 0x01 | counter | "SHE" | 0x00 |
|---|---|---|---|

Note that the constants C given in  have already been padded according to .

| KDF(K, C): AES-MP(K | C) |
|---|---|

### 14. 数据 storage
*原文标题：Data storage*

SHE needs memory to store keys and MACs. A non-volatile memory is required to store information that needs to be available after power cycles and resets of the microcontroller. A volatile memory is required to store temporary information. The volatile memory may loose its contents on reset or power cycles.

The memory of SHE should only be accessible by the SHE control logic. The CPU or any other peripherals, including debugging and testing facilities being available without opening the chip package, should not be able to access the memory.

If data from and to the non-volatile memory of SHE has to be transferred over a bus shared with other peripherals and it could not be guaranteed that these data will not be read or modified by any other instance, the following precautions have to be taken transparently to all functionality of SHE:

* An additional, individual key has to be stored inside of SHE.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. Security flags for 存储 slots
*原文标题：Security flags for memory slots*

When flags are transmitted in protocols the value "0" shall mean the flag is not set and "1" shall mean the flag is set. See  for details which key is protected by which security bits.

### 16. Write-protection of 存储 slots
*原文标题：Write-protection of memory slots*

Non-volatile keys, see Chapter , can be write-protected, i.e. it is not possible to change the key anymore, even if the corresponding secret is known.

The write-protection must be irreversible.

The write-protection is stored in a non-volatile memory only accessible by SHE and evaluated by the state machine controlling SHE upon write access.

Whenever the flag is transmitted in a protocol and it is not applicable to that particular key, it has to be transmitted as "0" and ignored by SHE.

The flag must not be set for any key after production.

### 17. Disabling keys on boot failure

Non-volatile keys, see Chapter , can be disabled separately when the secure boot mechanism (see Chapter ) detects a manipulation of the software or the secure boot process is bypassed by other boot mechanisms, e.g., by boot strapping over external interfaces. The memory slots may only be reactivated on next successful boot.

Disabling a key shall mean that SHE refuses to use the memory slot in any operation except those explicitly stated.

The status of this protection is stored in a non-volatile memory area only accessible by SHE and evaluated by the state machine controlling SHE upon read and write access.

Whenever the flag is transmitted in a protocol and it is not applicable to that particular key, it has to be transmitted as "0" and ignored by SHE.

The flag must not be set for any key after production.

### 18. Disabling keys on debugger activation

Non-volatile keys, see Chapter , can be disabled separately when a debugger is attached (e.g., JTAG, BDM) or any other mechanism is activated to boot without measuring the boot process by SHE while secure booting is activated, e.g. bootstrap over external interfaces. The memory slots may only be reactivated after a reset.

Disabling a key shall mean that SHE refuses to use the memory slot in any operation except those explicitly stated.

The status of the debugging protection is stored in a non-volatile memory area only accessible by SHE and evaluated by the state machine controlling SHE upon read and write access.

Whenever the flag is transmitted in a protocol and it is not applicable to that particular key, it has to be transmitted as "0" and ignored by SHE.

The flag must not be set for any key after production.

### 19. Disable wildcard usage for key updates

The flag determines if a key may be updated without supplying a valid UID, i.e. by supplying a special wildcard. For details on updating keys see Chapter  for details on the UID see Chapter .

If the flag is set, wildcards are not allowed.

The flag must not be set for any key after production.

### 20. Key usage determination

The flag determines if a key can be used for encryption/decryption or for MAC generation/verification.

If the flag is set, the key is used for MAC generation/verification.

The flag has only to be implemented for the keys KEY_<n>, see Chapter .

Whenever the flag is transmitted in a protocol and it is not applicable to that particular key, it has to be transmitted as "0" and ignored by SHE.

### 21. Plain key flag

The flag has only to be implemented for `RAM_KEY`, see Chapter . The flag has to be set by SHE whenever a key is loaded into KEY_{RAM\_KEY} in plaintext. The flag is evaluated before exporting a `RAM_KEY`. The flag has to be reset whenever a key is loaded by the secure protocol, see Chapter .

### 22. Non-volatile 存储 slots
*原文标题：Non-volatile memory slots*

The keys and the corresponding policies are described in detail within the following sections.

Non-volatile memory slots must implement a mechanism to detect empty memory slots, i.e. memory slots that have not been populated with a key after erasing or after production. Empty memory slots may not be used by any function but for inserting a key via the key update protocol described in Chapter .

### 23. MASTER_ECU_KEY

Note: The `MASTER_ECU_KEY` is intended to be populated by the "owner" of the component using SHE and it can be used to reset SHE or change any of the other keys.

The `MASTER_ECU_KEY` is only used for updating other memory slots inside of SHE, see Chapter  for details on updating memory slots.

A new `MASTER_ECU_KEY` can be written with the knowledge of the current `MASTER_ECU_KEY` and is protected by the common lock mechanisms described in Chapter , Chapter , Chapter  and Chapter .

The `MASTER_ECU_KEY` must be empty after production.

### 24. BOOT_MAC_KEY

The `BOOT_MAC_KEY` is used by the secure booting mechanism to verify the authenticity of the software.

The `BOOT_MAC_KEY` may also be used to verify a MAC.

See Chapter  for details on the secure booting.

The `BOOT_MAC_KEY` can be written with the knowledge of the `MASTER_ECU_KEY` or `BOOT_MAC_KEY` and is protected by the common lock mechanisms described in Chapter , Chapter , Chapter  and Chapter .

Note: When changing the `BOOT_MAC_KEY` the `BOOT_MAC` usually should be changed, too, except when first activating secure booting for autonomous MAC learning, see Chapter .

The `BOOT_MAC_KEY` must be empty after production.

### 25. BOOT_MAC

Note: The `BOOT_MAC` is required for the secure boot mechanism and is therefore stored inside of SHE. It is not considered to be a secret information, however, it is treated like any other key inside of SHE for the ease of use.

The `BOOT_MAC` is used to store the MAC of the Bootloader of the secure booting mechanism and may only be accessible to the booting mechanism of SHE.

See Chapter  for details on the secure booting.

The `BOOT_MAC` can be written with the knowledge of the `MASTER_ECU_KEY` or `BOOT_MAC_KEY` and is protected by the common lock mechanisms described in Chapter , Chapter , Chapter  and Chapter .

The `BOOT_MAC` must be empty after production.

### 26. KEY_<n>

Note: The KEY_<n> are actually intended to be used to process bulk data in any given application.

KEY_<n> can be used for arbitrary functions. n is a number 3..10, i.e. SHE must at least implement three and at maximum ten keys for arbitrary use.

The usage of the keys has to be selected between encryption/decryption or MAC generation/verification on programming time by setting the key usage flag accordingly, see Chapter .

KEY_<n> can be written with the knowledge of the `MASTER_ECU_KEY` or the current KEY_<n> and is protected by the common lock mechanisms described in Chapter , Chapter , Chapter  and Chapter .

The KEY_<n> must be empty after production.

### 27. PRNG_SEED

`PRNG_SEED` is used to store the seed for pseudo random number generator as described in Chapter . If the random number generator is implemented as described in Chapter  the memory slot is not required.

`PRNG_SEED` may only be accessed by `CMD_INIT_RNG` as described in Chapter .

`PRNG_SEED` must be initialized during fabrication of the chip. Its value must be generated by a certified physical random number generator, e.g. a High Security Module (HSM), and should meet at least the requirements of class P2 from .

Note: `PRNG_SEED` needs to be recalculated (see Chapter  ) before random numbers can be requested, i.e. in worst-case scenarios it is written on every power cycle/reset.

### 28. Volatile 存储 slots
*原文标题：Volatile memory slots*

The volatile memory slots should be cleared to "0" on reset or power-on-cycles.

The volatile memory slots are not protected by the lock mechanisms specified in Chapter , Chapter  and Chapter

### 29. RAM_KEY

The `RAM_KEY` can be used for arbitrary operations.

The `RAM_KEY` can be written with the knowledge of the KEY_<n> or in plain text.

The `RAM_KEY` can be exported if it was loaded as plaintext, see `CMD_EXPORT_RAM_KEY` in Chapter . A key loaded by the secure protocol may not be exported. The origin of the key has to be stored in a flag, see Chapter .

Note: Since the keys loaded into `RAM_KEY` are stored externally they are not under full control of SHE, hence they are vulnerable to several attacks, e.g. replay attacks and denial of service attacks. It is strongly advised to consider this fact when designing applications.

### 30. PRNG_KEY

The `PRNG_KEY` is not directly accessible by any user function but is used by the pseudo random number generator. See Chapter  for details on usage and data population.

The `PRNG_KEY` may also be implemented in non-volatile memory. In this case the key has to be generated, populated and protected by the same means as `SECRET_KEY` (see Chapter ).

### 31. PRNG_STATE

This memory slot holds the state of the pseudo random number generator.

The `PRNG_STATE` is not directly accessible by any user function but is used by the pseudo random number generator. See Chapter  for details on usage and data population.

### 32. Read-Only 存储 slots
*原文标题：Read-Only memory slots*

Two memory slots are defined read-only during the life-cycle of the controller. Read-only shall mean that they are at least protected by the controller logic, i.e. they may be writable during production but not after leaving the fabrication.

### 33. SECRET_KEY

SHE must contain a unique secret key `SECRET_KEY` that shall not only be derived from the serial number or any other publicly available information.

The `SECRET_KEY` has to be inserted during chip fabrication by the semiconductor manufacturer and should not be stored outside of SHE.

The `SECRET_KEY` must at least meet the requirements of class P2 from . It can be generated by a certified physical random number generator, e.g. a Hardware Security Module (HSM).

The `SECRET_KEY` may only be used to import/export keys.

### 34. Unique identification item UID

SHE or the microcontroller must contain a unique identification item, i.e. a serial number, of at most 120 bits. The identification item must be directly accessible by the controller logic of SHE.

Note: The UID is specified to 120 bit because it is always used in conjunction with two key ids or the status register to form a 128 bit block.

If the identification item is smaller than 120 bits it has to be padded with zero bits on the MSB side before feeding it into SHE.

The UID has to be inserted during chip fabrication by the semiconductor manufacturer.

The UID may not be 0, i.e. at least one bit has to be set. The UID with the value 0 is reserved as a wildcard UID for updating keys.

Note: The UID does not have to follow a special format, i.e. already inserted serial numbers can be reused. It should at least be unique for all chips of a certain manufacturer.

The UID may be exported through additional ports from SHE to be used with other components on the microcontroller. It must not be possible to affect the operation or status of SHE through this port.

### 35. Identification of 存储 slots
*原文标题：Identification of memory slots*

All memory slots being accessible by user-functions must be addressable by a four-bit value. The internal, physical addressing may differ.  shows the address of every key.

| Key name | Address (hexadecimal) | Memory area |
|---|---|---|
| SECRET_KEY | 0x0 | ROM |
| MASTER_ECU_KEY | 0x1 | non-volatile |
| BOOT_MAC_KEY | 0x2 | ^ |
| BOOT_MAC | 0x3 | ^ |
| KEY_1 | 0x4 | ^ |
| KEY_2 | 0x5 | ^ |
| KEY_3 | 0x6 | ^ |
| KEY_4 | 0x7 | ^ |
| KEY_5 | 0x8 | ^ |
| KEY_6 | 0x9 | ^ |
| KEY_7 | 0xa | ^ |
| KEY_8 | 0xb | ^ |
| KEY_9 | 0xc | ^ |
| KEY_10 | 0xd | ^ |
| RAM_KEY | 0xe | volatile |

### 36. Random number generation

SHE must include pseudo random number generator. The seed can be generated in two ways as described in Chapter

Note: Only one of the two described methods has to be implemented

The random numbers may not be generated directly by a true random number generator.

Note: A "P1 medium"  true random number generator (TRNG) may not be directly used for the purposes of SHE due to cryptographic reasons. Even smart cards or other advanced security solutions which possess high-quality physical sources of randomness usually rely at least on a compression of the TRNG output.

Note: The pseudo random number generator is designed to provide random numbers at constant quality for generating challenges for authentication at rates only limited by the performance of the underlying algorithm (AES).

### 37. Seed generation

The seed for the pseudo random number generator can be generated in two different ways. Either by implementing another pseudo random number generator as described in Chapter  or by compressing the output of a true random number generator as described in Chapter .

### 38. Seed generation through a pseudo random number generator (PRNG)

The seed is a non-volatile 128 bit value used as the input to the random number generator.

The seed is updated by invoking the command `CMD_INIT_RNG`, see Chapter

To update the seed, a key is derived with `PRNG_SEED_KEY_C` from `SECRET_KEY` (see Chapter  for the values of the single constants). The derived key is used to encrypt `PRNG_SEED`. The output has to be stored to `PRNG_SEED` first and must only be transferred to `PRNG_STATE` after completing the write transaction to `PRNG_SEED`.

`PRNG_SEED_KEY` = KDF(`SECRET_KEY`, `PRNG_SEED_KEY_C`) `PRNG_SEED_`{\texttt{i}} = ENC_{\texttt{ECB,PRNG\_SEED\_KEY}}(`PRNG_SEED_`{\texttt{i-1}})

If `PRNG_KEY` is implemented as a volatile memory slot, a key for running the PRNG has to be derived from `SECRET_KEY` and `PRNG_KEY_C` (see Chapter  for the values of the single constants).

`PRNG_KEY` = KDF(`SECRET_KEY`, `PRNG_KEY_C`)

### 39. Seed generation trough a true random number generator (TRNG)

The TRNG must at least fulfill the requirement "P1 medium" as described in  in all operating conditions according to the rating of the chip.

The seed is a 128 bit value used as the input to the random number generator. After generation it has to be stored as `PRNG_STATE`.

The seed is generated by invoking the command `CMD_INIT_RNG`, see Chapter .

The entropy of the seed needs to be at least 80 bits, i.e. if the level of entropy delivered by the TRNG is lower, enough entropy has to be collected and compressed. The semiconductor manufacturer has to provide evidence of reaching this entropy level upon request or in the data sheet.

The compression function has to be called at least once to generate the seed.

To compress the output of the TRNG into the seed the Miyaguchi-Preneel compression function can be used as defined in Chapter

If `PRNG_KEY` (see Chapter ) is implemented as a volatile memory slot, a key for running the PRNG has to be derived according to Chapter .

### 40. Random generation

The random number generator must not output any random values before the seed is updated as described above.

To generate a new random value according to E.4 , the content of `PRNG_STATE` is encrypted with `PRNG_KEY`. The output of the encryption is used as the input for the next random generation (encryption), i.e. it replaces `PRNG_STATE`, and is also output to the user, see  for details on the workflow:

`PRNG_STATE_`{\texttt{i}} = ENC_{\texttt{ECB,PRNG\_KEY}}(`PRNG_STATE_`{\texttt{i-1}}) RND = `PRNG_STATE_`{\texttt{i}}

That is, the implementation of PRNG must fulfill K3 with strength of mechanisms "high" according to .

### 41. Extending the seed

The seed and the current `PRNG_STATE` can be extended by any user by calling the function `CMD_EXTEND_SEED` and supplying 128 bit of entropy. The seed and the state are extended by compressing the concatenation of the old seed/state and the entropy input with the Miyaguchi-Preneel compression function described above. The input to the compression function has to be preprocessed according to Chapter . Since the compression is a fixed length operation for 2x128 bit = 256 bit the padding becomes a constant operation. The padding is given as constant `PRNG_EXTENSION_C` in Chapter .

`PRNG_STATE` = AES-MP(`PRNG_STATE` \mid ENTROPY) `PRNG_SEED` = AES-MP(`PRNG_SEED` \mid ENTROPY)

### 42. Status Register

A status register can be read by the CPU to check the internal state of SHE. The status register has a total width of 8 bits. If a bit is set its value is '1', if it is cleared its value is '0'.

| Bit | Name | Description |
|---|---|---|
| 2^0 | BUSY | The bit is set whenever SHE is processing a command. |
| 2^1 | SECURE_BOOT | The bit is set if the secure booting is activated. |
| 2^2 | BOOT_INIT | The bit is set if the secure booting has been personalized during the boot sequence. |
| 2^3 | BOOT_FINISHED | The bit is set when the secure booting has been finished by calling either CMD_BOOT_FAILURE or CMD_BOOT_OK or if CMD_SECURE_BOOT failed in verifying BOOT_MAC. |
| 2^4 | BOOT_OK | The bit is set if the secure booting (CMD_SECURE_BOOT) succeeded. If CMD_BOOT_FAILURE is called the bit is erased. |
| 2^5 | RND_INIT | The bit is set if the random number generator has been initialized. |
| 2^6 | EXT_DEBUGGER | The bit is set if an external debugger is connected to the chip, i.e. it reflects the input for debugger activation. |
| 2^7 | INT_DEBUGGER | The bit is set if the internal debugging mechanisms of SHE are activated |

### 43. User-accessible Functions

SHE provides several functions to the CPU. In general, only a single function can be executed at a given time. Only the commands `CMD_GET_STATUS` (Chapter ) and `CMD_CANCEL` (Chapter ) may be called while another function is processed.

In the following subchapters all available functions are listed together with the necessary parameters, the direction of the parameters and the width of the single parameters in bits.

The function interface has to be asynchronous, i.e. all functions have to be non-blocking for the CPU and therefore return immediately.

Despite of returning data, every function must be able to return an error code to communicate the status of the processing to the calling application, see Chapter  for details on error codes.

If a function returns an error code the output data has to be set to '0'.

Note: If output has been generated and transmitted, e.g., on CBC operations or via DMA transfer, this output does not have to be deleted but the output of the round containing an error has to be '0'. Especially the CMAC functions may not output anything on errors.

If not stated differently, all functions can only process complete blocks of data, i.e.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 44. Encryption：CMD_ENC_ECB
*原文标题：Encryption: CMD_ENC_ECB*

| Parameter | Direction | Width |
|---|---|---|
| KEY_ID | IN | 4 |
| PLAINTEXT | IN | 128 |
| CIPHERTEXT | OUT | 128 |
| The function encrypts a given PLAINTEXT with the key identified by KEY_ID and returns the CIPHERTEXT. See  for an overview of the allowed keys for the operation. | < | < |
| CIPHERTEXT = ENC_{\texttt{ECB,KEY\_KEY\_ID}} (PLAINTEXT) | < | < |
| Error codes: ERC_NO_ERROR, ERC_SEQUENCE_ERROR, ERC_KEY_NOT_AVAILABLE, ERC_KEY_INVALID, ERC_KEY_EMPTY, ERC_MEMORY_FAILURE, ERC_BUSY, ERC_GENERAL_ERROR | < | < |

### 45. Encryption：CMD_ENC_CBC
*原文标题：Encryption: CMD_ENC_CBC*

| Parameter | Direction | Width |
|---|---|---|
| KEY_ID | IN | 4 |
| IV | IN | 128 |
| PLAINTEXT | IN | n * 128 |
| CIPHERTEXT | OUT | n * 128 |
| The function encrypts a given PLAINTEXT with the key identified by KEY_ID and returns the CIPHERTEXT. See  for an overview of the allowed keys for the operation. The plaintext can have a multiple length of the block width of 128 bit, n = 1, 2, 3, ... | < | < |
| CIPHERTEXT = ENC_{\texttt{CBC,KEY\_KEY\_ID,IV}} (PLAINTEXT) | < | < |
| Error codes: ERC_NO_ERROR, ERC_SEQUENCE_ERROR, ERC_KEY_NOT_AVAILABLE, ERC_KEY_INVALID, ERC_KEY_EMPTY, ERC_MEMORY_FAILURE, ERC_BUSY, ERC_GENERAL_ERROR | < | < |

### 其余 61 章（内容从略，见纯文本全文）

46. Decryption：CMD_DEC_ECB
47. Decryption：CMD_DEC_CBC
48. MAC generation：CMD_GENERATE_MAC
49. MAC verification：CMD_VERIFY_MAC
50. Secure key update：CMD_LOAD_KEY
51. Plain key update：CMD_LOAD_PLAIN_KEY
52. Export key：CMD_EXPORT_RAM_KEY
53. Initialize random number generator：CMD_INIT_RNG
54. Extend the PRNG seed：CMD_EXTEND_SEED
55. Generate random number：CMD_RND
56. Bootloader verification (secure booting)：CMD_SECURE_BOOT
57. Impose sanctions during invalid boot：CMD_BOOT_FAILURE
58. Finish boot verification：CMD_BOOT_OK
59. Read status of SHE：CMD_GET_STATUS
60. Get identity：CMD_GET_ID
61. Cancel 功能：CMD_CANCEL
62. Debugger activation：CMD_DEBUG
63. 错误 Codes
64. ERC_NO_ERROR
65. ERC_SEQUENCE_ERROR
66. ERC_KEY_NOT_AVAILABLE
67. ERC_KEY_INVALID
68. ERC_KEY_EMPTY
69. ERC_NO_SECURE_BOOT
70. ERC_KEY_WRITE_PROTECTED
71. ERC_KEY_UPDATE_ERROR
72. ERC_RNG_SEED
73. ERC_NO_DEBUGGING
74. ERC_BUSY
75. ERC_MEMORY_FAILURE
76. ERC_GENERAL_ERROR
77. 存储 update 协议
78. the 存储 update 协议的描述
79. 描述 of the update verification message generation
80. Secure booting
81. Measurement before application start-up
82. Exemplary implementation：extension of the boot 代码
83. Measurement during application start-up
84. Autonomous bootstrap 配置 of the secure boot process
85. Sanctions on fail of boot measurement
86. Optional：Enforcing authenticated 软件
87. Optional：Flow charts
88. Failure analysis of SHE/Resetting SHE
89. Constants used within SHE
90. 示例 and Test vectors
91. AES-128, ECB 模式
92. AES-128, CBC 模式
93. encryption
94. decryption
95. CMAC
96. Miyaguchi-Preneel compression 功能
97. Key derivation
98. Pseudo random generation/Seed generation
99. Calculate new seed
100. Calculate new random value
101. Extend seed
102. 存储 update 协议
103. Failure analysis of SHE/Resetting SHE
104. 概述 Tables
105. 附录
106. 附录

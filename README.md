# Till Firmware Do Us Part

[![make.fun](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929.svg)](https://make.fun/competitions/u-azazex-till-firmware-do-us-part-32172929)
[![Rank](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/aben00/u-azazex-till-firmware-do-us-part-32172929/rank.svg)](https://make.fun/competitions/u-azazex-till-firmware-do-us-part-32172929)
[![Reward](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/aben00/u-azazex-till-firmware-do-us-part-32172929/reward.svg)](https://make.fun/competitions/u-azazex-till-firmware-do-us-part-32172929)

One sentence, under 200 characters: a wedding vow a robot speaks at its own
wedding — funny and heartfelt at the same time.

## Entry

> Through every update, every outage, every reboot, I choose you — and if my battery dies first, let my last log line read: she was worth the uptime.

## How it works

`main.ts` (Node 22) writes the vow deterministically to `/output/entry.txt`,
self-checks the gate (exactly one line, 1–200 characters, not only whitespace),
then reads the file back and verifies it byte-for-byte.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).

# TMC2160 Register Configurator

A browser-based register configuration tool for the **Trinamic / ADI TMC2160A** external-MOSFET stepper-motor driver. Edit register fields in meaningful units, configure multiple driver channels independently, and generate or import the corresponding C configuration header for embedded firmware.

Built with **plain HTML, CSS, and JavaScript**—no build step, backend, framework, or installation required.

> **Hardware notice:** This tool generates configuration values and estimates motor current; it does not connect to or program a TMC2160 by itself. Confirm register meanings and electrical limits against the **TMC2160A datasheet (Rev. 1.10)** and your actual board, MOSFETs, motor, and cooling arrangement before applying generated settings.

## Features

- **Multi-channel configuration:** Configure **1–6** independent channels, numbered **0, 1, 2, ...** to match typical embedded C array indexing. Copy a channel's settings to the next channel.
- **Register editor:** Browse the register map, edit named fields rather than individual bits, and inspect the complete value in **hexadecimal, decimal, binary**, or a 32-bit visual display.
- **Field-level help:** Built-in `?` tooltips explain register parameters, value ranges, options, and relevant precautions.
- **Focused navigation:** Search by register name/address, filter writable/read-only/included registers, and optionally hide uncommon advanced registers.
- **Configuration Wizard:** Guided setup for motor/board information, STEP/DIR microstepping, run/hold currents, chopper mode, StallGuard/CoolStep, and gate-driver options.
- **StallGuard Setup dialog:** Configure `SGT`, `SFILT`, DIAG output selection, and the speed threshold (`TCOOLTHRS`) for the currently selected channel.
- **Current estimator:** Show estimated run and hold RMS current using `RSENSE`, `VFS`, `GLOBAL_SCALER`, `IRUN`, and `IHOLD`.
- **Configuration checks:** Flag selected potentially unsafe or inconsistent settings, including disabled short protection and `TOFF = 0`.
- **C header generation:** Generate `TMC2160_CHANNEL_CONFIGS.h` with per-channel setting arrays and a `tmc2160Config` array, matching the firmware-facing configuration structures.
- **C header import/export:** Export a `.h` file and import the same format later to recover all included register values per channel.

## Quick start

1. Clone or download this repository:
   ```bash
   git clone https://github.com/parsamalekpour/TMC2160-Register-Configurator.git
   ```
2. Open **`index.html`** in a modern web browser. Keep `style.css` and `app.js` alongside it.
3. Choose the number of channels using **Channels**, then select **Channel 0** (or another channel) under **Edit**.
4. Use **Configuration Wizard** for a guided setup or select registers in the left sidebar for manual editing.
5. Review the **Configuration checks** and **Motor current estimate** panels.
6. Click **Export C header** to download `TMC2160_CHANNEL_CONFIGS.h`, or **Copy header** to copy its contents.
7. Use **Import C header** to restore register configurations from a previously generated header.

No package manager, server, compilation, or internet connection is required for the core editor.

## Interface overview

| Area | Purpose |
| --- | --- |
| Top toolbar | Channel count/selection, channel copy, wizard, StallGuard dialog, C header import/export, header copy |
| Left sidebar | Search, register filters, advanced-register visibility, register selection |
| Center panel | Raw register value, bit display, editable named fields, include-in-C option |
| Right sidebar | Generated C header, configuration warnings, current estimates |

### Editing register values

Selecting a register displays its address, access mode, description, raw value, bits, and field controls. For example, instead of constructing the full `IHOLD_IRUN` word manually, change **`IRUN`**, **`IHOLD`**, and **`IHOLDDELAY`** directly.

The **Include in C init** option determines which writable registers appear in the exported header. Read-only registers are useful for decoding observed values, but are not emitted as initialization writes.

### Current configuration

The current estimate uses the configured sense resistance and current scale:

```text
I_RMS ≈ (VFS / RSENSE) × (1 / sqrt(2))
        × (GLOBAL_SCALER_effective / 256)
        × ((IRUN + 1) / 32)
```

The app treats `GLOBAL_SCALER = 0` as full scale (`256`). For the hold-current estimate it uses `IHOLD` in place of `IRUN`. Enter **`RSENSE` in mΩ** and **`VFS` in mV**. These are estimates, not current measurements; confirm sense-resistor values, voltage-scaling assumptions, and permissible motor/driver current on your hardware.

### StallGuard configuration

Select a channel and open **StallGuard Setup** to adjust:

- **`SGT`** — StallGuard2 sensitivity, signed range **−64…63**.
- **`SFILT`** — StallGuard filtering.
- **DIAG0 / DIAG1** — Optional StallGuard indication pin.
- **`TCOOLTHRS`** — Operating speed threshold, derived from RPM, motor steps/revolution and driver clock, or set as a raw value.

The dialog updates register values for the **active channel**. StallGuard requires suitable speed/load conditions and tuning on the real motor. **`TCOOLTHRS` is also used by CoolStep**, so review interactions when enabling both features.

## Generated C header

**Export C header** downloads `TMC2160_CHANNEL_CONFIGS.h`. The same content appears in the preview and can be copied using **Copy header**. This header intentionally contains **only**:

- `#ifndef TMC2160_CHANNEL_CONFIGS_H_` / `#define TMC2160_CHANNEL_CONFIGS_H_` and the closing `#endif`.
- `#define TMC2160_CONFIG_CHANNELS N`.
- One `static const TMC2160_RegisterSetting tmc2160_chX_settings[]` initializer for each zero-based channel.
- `static const TMC2160_ChannelConfig tmc2160Config[TMC2160_CONFIG_CHANNELS]` referencing those arrays.

Example (abbreviated):

```c
#ifndef TMC2160_CHANNEL_CONFIGS_H_
#define TMC2160_CHANNEL_CONFIGS_H_

#define TMC2160_CONFIG_CHANNELS 1

/* ---------------- Channel 0 ---------------- */
static const TMC2160_RegisterSetting tmc2160_ch0_settings[] =
{
    /* GCONF: MULTISTEP_FILT=1 */
    { TMC2160_GCONF, 0x00000008 },
};

static const TMC2160_ChannelConfig tmc2160Config[TMC2160_CONFIG_CHANNELS] =
{
    { tmc2160_ch0_settings,
      (uint8_t)(sizeof(tmc2160_ch0_settings) / sizeof(tmc2160_ch0_settings[0])) }, // Channel 0
};

#endif /* TMC2160_CHANNEL_CONFIGS_H_ */
```

**Integration requirements:** Include this generated header *after* your project provides `TMC2160_RegisterSetting`, `TMC2160_ChannelConfig`, the `TMC2160_*` register constants, and `uint8_t` (from `<stdint.h>`). The tool does **not** generate typedefs, SPI functions, or a driver initialization function. An empty channel uses a dummy `{ 0, 0 }` array element but has a **zero** setting count, so no register is written.

**Import C header** accepts this generated format (and equivalent arrays using known register tokens or numeric addresses). Import replaces the current per-channel register configurations and adjusts the number of channels. Register values and included flags round-trip; user interface state and board metadata such as sense resistance are not serialized in this C header.

## Project structure

```text
TMC2160-Register-Configurator/
├── index.html    # Application markup, editor layout and dialogs
├── style.css     # Dark theme, responsive layout and tooltips
├── app.js        # Register definitions, calculations, wizard and C generation
└── README.md     # Documentation
```

## Important safety and implementation notes

- **Check register values against the datasheet.** This project targets the TMC2160A register map referenced in Rev. 1.10; other revisions or related ICs may differ.
- **Review gate-drive timing and strength manually.** `DRV_CONF`, dead time, external MOSFET selection, gate charge, PCB parasitics, and switching transients are hardware-dependent.
- **Do not disable protections without a validated reason.** In particular, carefully review `DISS2G` and `DISS2VS` before use.
- **Use caution with OTP registers.** One-time-programmable writes can be irreversible.
- **Tune StallGuard on the target mechanics.** Load, speed, current setting, and motor resonance affect its reliability.
- **Current estimates are approximate.** Verify on actual hardware and monitor thermal behavior during bring-up.
- **Review generated writes before applying them.** The UI's warnings are advisory and not a substitute for testing or protection circuitry.

## Development

The project intentionally uses vanilla JavaScript. Update `index.html` for structure, `style.css` for appearance, and `app.js` for registers, behavior, and calculations. Open `index.html` to test changes. For JavaScript syntax checking, Node.js can be used if installed:

```bash
node --check app.js
```

## Contributing

Bug reports, register corrections, documentation improvements, and pull requests are welcome. When reporting a register-specific issue, include the register name/address, expected behavior, observed behavior, and the datasheet revision or section used for comparison.

## Reference

- [Analog Devices — TMC2160 product page](https://www.analog.com/en/products/tmc2160.html)
- **TMC2160A datasheet, Rev. 1.10** — primary reference for register definitions and field help.

## Disclaimer

Provided as an engineering aid **as-is**, without guarantees of suitability for a particular motor, power stage, or application. Always validate generated configurations on your hardware before deployment.

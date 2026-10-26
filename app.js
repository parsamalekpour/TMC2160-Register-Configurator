const REGS = [{"name":"GCONF","addr":0,"access":"RW","fields":[{"name":"RECALIBRATE","label":"RECALIBRATE","mask":1,"shift":0,"width":1,"signed":false,"min":0,"max":1},{"name":"FASTSTANDSTILL","label":"FASTSTANDSTILL","mask":2,"shift":1,"width":1,"signed":false,"min":0,"max":1},{"name":"EN_PWM_MODE","label":"EN_PWM_MODE","mask":4,"shift":2,"width":1,"signed":false,"min":0,"max":1},{"name":"MULTISTEP_FILT","label":"MULTISTEP_FILT","mask":8,"shift":3,"width":1,"signed":false,"min":0,"max":1},{"name":"SHAFT","label":"SHAFT","mask":16,"shift":4,"width":1,"signed":false,"min":0,"max":1,"note":"1 reverses motor direction."},{"name":"DIAG0_ERROR__ONLY_WITH_SD_MODE_1_","label":"DIAG0_ERROR","mask":32,"shift":5,"width":1,"signed":false,"min":0,"max":1},{"name":"DIAG0_OTPW__ONLY_WITH_SD_MODE_1_","label":"DIAG0_OTPW","mask":64,"shift":6,"width":1,"signed":false,"min":0,"max":1},{"name":"DIAG0_STALL","label":"DIAG0_STALL","mask":128,"shift":7,"width":1,"signed":false,"min":0,"max":1,"note":"Requires a suitable TCOOLTHRS."},{"name":"DIAG1_STALL","label":"DIAG1_STALL","mask":256,"shift":8,"width":1,"signed":false,"min":0,"max":1,"note":"Requires a suitable TCOOLTHRS."},{"name":"DIAG1_INDEX","label":"DIAG1_INDEX","mask":512,"shift":9,"width":1,"signed":false,"min":0,"max":1},{"name":"DIAG1_ONSTATE","label":"DIAG1_ONSTATE","mask":1024,"shift":10,"width":1,"signed":false,"min":0,"max":1},{"name":"DIAG1_STEPS_SKIPPED","label":"DIAG1_STEPS_SKIPPED","mask":2048,"shift":11,"width":1,"signed":false,"min":0,"max":1},{"name":"DIAG0_INT_PUSHPULL","label":"DIAG0_INT_PUSHPULL","mask":4096,"shift":12,"width":1,"signed":false,"min":0,"max":1},{"name":"DIAG1_POSCOMP_PUSHPULL","label":"DIAG1_PUSHPULL","mask":8192,"shift":13,"width":1,"signed":false,"min":0,"max":1},{"name":"SMALL_HYSTERESIS","label":"SMALL_HYSTERESIS","mask":16384,"shift":14,"width":1,"signed":false,"min":0,"max":1},{"name":"STOP_ENABLE","label":"STOP_ENABLE","mask":32768,"shift":15,"width":1,"signed":false,"min":0,"max":1},{"name":"DIRECT_MODE","label":"DIRECT_MODE","mask":65536,"shift":16,"width":1,"signed":false,"min":0,"max":1},{"name":"TEST_MODE","label":"TEST_MODE","mask":131072,"shift":17,"width":1,"signed":false,"min":0,"max":1,"note":"Keep 0 during normal operation."}],"desc":"Global configuration flags.","default":8,"constant":"TMC2160_GCONF","danger":false,"note":""},{"name":"GSTAT","addr":1,"access":"R+WC","fields":[{"name":"RESET","label":"RESET","mask":1,"shift":0,"width":1,"signed":false,"min":0,"max":1},{"name":"DRV_ERR","label":"DRV_ERR","mask":2,"shift":1,"width":1,"signed":false,"min":0,"max":1},{"name":"UV_CP","label":"UV_CP","mask":4,"shift":2,"width":1,"signed":false,"min":0,"max":1}],"desc":"Latched global status flags. Write 1 to clear a flag.","default":0,"constant":"TMC2160_GSTAT","danger":false,"note":""},{"name":"IOIN","addr":4,"access":"R","fields":[{"name":"STEP","label":"STEP","mask":1,"shift":0,"width":1,"signed":false,"min":0,"max":1},{"name":"DIR","label":"DIR","mask":2,"shift":1,"width":1,"signed":false,"min":0,"max":1},{"name":"DCEN_CFG4","label":"DCEN_CFG4","mask":4,"shift":2,"width":1,"signed":false,"min":0,"max":1},{"name":"DCIN_CFG5","label":"DCIN_CFG5","mask":8,"shift":3,"width":1,"signed":false,"min":0,"max":1},{"name":"DRV_ENN","label":"DRV_ENN","mask":16,"shift":4,"width":1,"signed":false,"min":0,"max":1},{"name":"DCO_CFG6","label":"DCO_CFG6","mask":32,"shift":5,"width":1,"signed":false,"min":0,"max":1},{"name":"VERSION","label":"VERSION","mask":4278190080,"shift":24,"width":8,"signed":false,"min":0,"max":255}],"desc":"Input pin states and IC version.","default":0,"constant":"TMC2160_IOIN","danger":false,"note":""},{"name":"OTP_PROG","addr":6,"access":"W","fields":[{"name":"OTPBIT","label":"OTPBIT","mask":7,"shift":0,"width":3,"signed":false,"min":0,"max":7},{"name":"OTPBYTE","label":"OTPBYTE","mask":48,"shift":4,"width":2,"signed":false,"min":0,"max":3},{"name":"OTPMAGIC","label":"OTPMAGIC","mask":65280,"shift":8,"width":8,"signed":false,"min":0,"max":255}],"desc":"One-time-programmable memory programming register.","default":0,"constant":"TMC2160_OTP_PROG","danger":true,"note":"OTP writes are irreversible. The configurator never includes OTP_PROG unless you explicitly unlock and include it."},{"name":"OTP_READ","addr":7,"access":"R","fields":[{"name":"OTP_TBL","label":"OTP_TBL","mask":128,"shift":7,"width":1,"signed":false,"min":0,"max":1},{"name":"OTP_BBM","label":"OTP_BBM","mask":64,"shift":6,"width":1,"signed":false,"min":0,"max":1},{"name":"OTP_S2_LEVEL","label":"OTP_S2_LEVEL","mask":32,"shift":5,"width":1,"signed":false,"min":0,"max":1},{"name":"OTP_FCLKTRIM","label":"OTP_FCLKTRIM","mask":31,"shift":0,"width":5,"signed":false,"min":0,"max":31}],"desc":"OTP configuration memory readback.","default":0,"constant":"TMC2160_OTP_READ","danger":false,"note":""},{"name":"FACTORY_CONF","addr":8,"access":"RW","fields":[{"name":"FCLKTRIM","label":"FCLKTRIM","mask":31,"shift":0,"width":5,"signed":false,"min":0,"max":31}],"desc":"Internal clock trim. Normally factory/OTP calibrated.","default":0,"constant":"TMC2160_FACTORY_CONF","danger":false,"note":"Changing FCLKTRIM changes internal clock frequency; leave it at the factory value unless you are intentionally calibrating it."},{"name":"SHORT_CONF","addr":9,"access":"W","fields":[{"name":"S2VS_LEVEL","label":"S2VS_LEVEL","mask":15,"shift":0,"width":4,"signed":false,"min":0,"max":15},{"name":"S2GND_LEVEL","label":"S2G_LEVEL","mask":3840,"shift":8,"width":4,"signed":false,"min":0,"max":15},{"name":"SHORTFILTER","label":"SHORTFILTER","mask":196608,"shift":16,"width":2,"signed":false,"min":0,"max":3},{"name":"SHORTDELAY","label":"SHORTDELAY","mask":262144,"shift":18,"width":1,"signed":false,"min":0,"max":1}],"desc":"Short-circuit detector configuration.","default":0,"constant":"TMC2160_SHORT_CONF","danger":false,"note":""},{"name":"DRV_CONF","addr":10,"access":"W","fields":[{"name":"BBMTIME","label":"BBMTIME","mask":31,"shift":0,"width":5,"signed":false,"min":0,"max":31},{"name":"BBMCLKS","label":"BBMCLKS","mask":3840,"shift":8,"width":4,"signed":false,"min":0,"max":15},{"name":"OTSELECT","label":"OTSELECT","mask":196608,"shift":16,"width":2,"signed":false,"min":0,"max":3,"options":{"0":"150\u00b0C","1":"143\u00b0C","2":"136\u00b0C","3":"120\u00b0C"}},{"name":"DRVSTRENGTH","label":"DRVSTRENGTH","mask":786432,"shift":18,"width":2,"signed":false,"min":0,"max":3,"options":{"0":"Weak","1":"Weak + temperature compensation","2":"Medium","3":"Strong"}},{"name":"FILT_ISENSE","label":"FILT_ISENSE","mask":3145728,"shift":20,"width":2,"signed":false,"min":0,"max":3,"options":{"0":"100 ns","1":"200 ns","2":"300 ns","3":"400 ns"}}],"desc":"External MOSFET gate-driver configuration.","default":0,"constant":"TMC2160_DRV_CONF","danger":false,"note":""},{"name":"GLOBAL_SCALER","addr":11,"access":"W","fields":[{"name":"GLOBAL_SCALER","label":"GLOBAL_SCALER","mask":255,"shift":0,"width":8,"signed":false,"min":0,"max":255,"note":"0 = full scale (256/256); 1\u202631 are not valid for normal operation."}],"desc":"Global motor-current scale.","default":0,"constant":"TMC2160_GLOBAL_SCALER","danger":false,"note":""},{"name":"OFFSET_READ","addr":12,"access":"R","fields":[{"name":"OFFSET_READ_B","label":"OFFSET_READ_B","mask":255,"shift":0,"width":8,"signed":true,"min":-128,"max":127},{"name":"OFFSET_READ_A","label":"OFFSET_READ_A","mask":65280,"shift":8,"width":8,"signed":true,"min":-128,"max":127}],"desc":"Sense-amplifier offset calibration results.","default":0,"constant":"TMC2160_OFFSET_READ","danger":false,"note":""},{"name":"IHOLD_IRUN","addr":16,"access":"W","fields":[{"name":"IHOLD","label":"IHOLD","mask":31,"shift":0,"width":5,"signed":false,"min":0,"max":31,"note":"0=1/32 \u2026 31=32/32."},{"name":"IRUN","label":"IRUN","mask":7936,"shift":8,"width":5,"signed":false,"min":0,"max":31,"note":"0=1/32 \u2026 31=32/32. 16\u202631 is preferred for best microstep performance."},{"name":"IHOLDDELAY","label":"IHOLDDELAY","mask":983040,"shift":16,"width":4,"signed":false,"min":0,"max":15}],"desc":"Run and standstill current control.","default":0,"constant":"TMC2160_IHOLD_IRUN","danger":false,"note":""},{"name":"TPOWERDOWN","addr":17,"access":"W","fields":[{"name":"TPOWERDOWN","label":"TPOWERDOWN","mask":255,"shift":0,"width":8,"signed":false,"min":0,"max":255,"note":"Minimum 2 is recommended when StealthChop automatic tuning is used."}],"desc":"Delay from standstill to hold-current power-down.","default":10,"constant":"TMC2160_TPOWERDOWN","danger":false,"note":""},{"name":"TSTEP","addr":18,"access":"R","fields":[{"name":"TSTEP","label":"TSTEP","mask":1048575,"shift":0,"width":20,"signed":false,"min":0,"max":1048575}],"desc":"Measured time between 1/256 microsteps.","default":0,"constant":"TMC2160_TSTEP","danger":false,"note":""},{"name":"TPWMTHRS","addr":19,"access":"W","fields":[{"name":"TPWMTHRS","label":"TPWMTHRS","mask":1048575,"shift":0,"width":20,"signed":false,"min":0,"max":1048575}],"desc":"StealthChop upper velocity threshold.","default":0,"constant":"TMC2160_TPWMTHRS","danger":false,"note":""},{"name":"TCOOLTHRS","addr":20,"access":"W","fields":[{"name":"TCOOLTHRS","label":"TCOOLTHRS","mask":1048575,"shift":0,"width":20,"signed":false,"min":0,"max":1048575}],"desc":"CoolStep/StallGuard lower velocity threshold.","default":0,"constant":"TMC2160_TCOOLTHRS","danger":false,"note":""},{"name":"THIGH","addr":21,"access":"W","fields":[{"name":"THIGH","label":"THIGH","mask":1048575,"shift":0,"width":20,"signed":false,"min":0,"max":1048575}],"desc":"High-speed mode threshold.","default":0,"constant":"TMC2160_THIGH","danger":false,"note":""},{"name":"XDIRECT","addr":45,"access":"RW","fields":[{"name":"COIL_A","label":"COIL_A","mask":511,"shift":0,"width":9,"signed":true,"min":-255,"max":255,"note":"Signed 9-bit coil A current command."},{"name":"COIL_B","label":"COIL_B","mask":33488896,"shift":16,"width":9,"signed":true,"min":-255,"max":255,"note":"Signed 9-bit coil B current command."}],"desc":"Direct coil-current control when GCONF.DIRECT_MODE=1.","default":0,"constant":"TMC2160_XDIRECT","danger":false,"note":""},{"name":"VDCMIN","addr":51,"access":"W","fields":[{"name":"VDCMIN","label":"VDCMIN","mask":8388607,"shift":0,"width":23,"signed":false,"min":0,"max":8388607}],"desc":"DcStep minimum velocity threshold.","default":0,"constant":"TMC2160_VDCMIN","danger":false,"note":""},{"name":"MSLUT0","addr":96,"access":"W","fields":[],"desc":"Microstep lookup-table bits 0\u202631.","default":0,"constant":null,"danger":false,"note":"Raw 32-bit microstep LUT register."},{"name":"MSLUT1","addr":97,"access":"W","fields":[],"desc":"Microstep lookup-table bits 32\u202663.","default":0,"constant":null,"danger":false,"note":"Raw 32-bit microstep LUT register."},{"name":"MSLUT2","addr":98,"access":"W","fields":[],"desc":"Microstep lookup-table bits 64\u202695.","default":0,"constant":null,"danger":false,"note":"Raw 32-bit microstep LUT register."},{"name":"MSLUT3","addr":99,"access":"W","fields":[],"desc":"Microstep lookup-table bits 96\u2026127.","default":0,"constant":null,"danger":false,"note":"Raw 32-bit microstep LUT register."},{"name":"MSLUT4","addr":100,"access":"W","fields":[],"desc":"Microstep lookup-table bits 128\u2026159.","default":0,"constant":null,"danger":false,"note":"Raw 32-bit microstep LUT register."},{"name":"MSLUT5","addr":101,"access":"W","fields":[],"desc":"Microstep lookup-table bits 160\u2026191.","default":0,"constant":null,"danger":false,"note":"Raw 32-bit microstep LUT register."},{"name":"MSLUT6","addr":102,"access":"W","fields":[],"desc":"Microstep lookup-table bits 192\u2026223.","default":0,"constant":null,"danger":false,"note":"Raw 32-bit microstep LUT register."},{"name":"MSLUT7","addr":103,"access":"W","fields":[],"desc":"Microstep lookup-table bits 224\u2026255.","default":0,"constant":null,"danger":false,"note":"Raw 32-bit microstep LUT register."},{"name":"MSLUTSEL","addr":104,"access":"W","fields":[{"name":"W0","label":"W0","mask":3,"shift":0,"width":2,"signed":false,"min":0,"max":3},{"name":"W1","label":"W1","mask":12,"shift":2,"width":2,"signed":false,"min":0,"max":3},{"name":"W2","label":"W2","mask":48,"shift":4,"width":2,"signed":false,"min":0,"max":3},{"name":"W3","label":"W3","mask":192,"shift":6,"width":2,"signed":false,"min":0,"max":3},{"name":"X1","label":"X1","mask":65280,"shift":8,"width":8,"signed":false,"min":0,"max":255},{"name":"X2","label":"X2","mask":16711680,"shift":16,"width":8,"signed":false,"min":0,"max":255},{"name":"X3","label":"X3","mask":4278190080,"shift":24,"width":8,"signed":false,"min":0,"max":255}],"desc":"Microstep LUT segment widths and breakpoints.","default":0,"constant":"TMC2160_MSLUTSEL","danger":false,"note":""},{"name":"MSLUTSTART","addr":105,"access":"W","fields":[{"name":"START_SIN","label":"START_SIN","mask":255,"shift":0,"width":8,"signed":false,"min":0,"max":255},{"name":"START_SIN90","label":"START_SIN90","mask":16711680,"shift":16,"width":8,"signed":false,"min":0,"max":255}],"desc":"Microstep LUT start values.","default":0,"constant":"TMC2160_MSLUTSTART","danger":false,"note":""},{"name":"MSCNT","addr":106,"access":"R","fields":[{"name":"MSCNT","label":"MSCNT","mask":1023,"shift":0,"width":10,"signed":false,"min":0,"max":1023}],"desc":"Microstep counter.","default":0,"constant":"TMC2160_MSCNT","danger":false,"note":""},{"name":"MSCURACT","addr":107,"access":"R","fields":[{"name":"CUR_A","label":"CUR_A","mask":511,"shift":0,"width":9,"signed":true,"min":-255,"max":255},{"name":"CUR_B","label":"CUR_B","mask":33488896,"shift":16,"width":9,"signed":true,"min":-255,"max":255}],"desc":"Actual internal sine-table currents for phase A/B.","default":0,"constant":"TMC2160_MSCURACT","danger":false,"note":""},{"name":"CHOPCONF","addr":108,"access":"RW","fields":[{"name":"TOFF","label":"TOFF","mask":15,"shift":0,"width":4,"signed":false,"min":0,"max":15,"note":"0 disables the driver chopper."},{"name":"HSTRT","label":"HSTRT (SpreadCycle / CHM=0)","mask":112,"shift":4,"width":3,"signed":false,"min":0,"max":7},{"name":"HEND","label":"HEND (SpreadCycle / CHM=0)","mask":1920,"shift":7,"width":4,"signed":false,"min":0,"max":15},{"name":"TFD_ALL","label":"TFD[2:0] (Constant-off-time / CHM=1)","mask":112,"shift":4,"width":3,"signed":false,"min":0,"max":7},{"name":"OFFSET","label":"OFFSET (CHM=1)","mask":1920,"shift":7,"width":4,"signed":false,"min":0,"max":15},{"name":"TFD_3","label":"TFD[3] (CHM=1)","mask":2048,"shift":11,"width":1,"signed":false,"min":0,"max":1},{"name":"DISFDCC","label":"DISFDCC (CHM=1)","mask":4096,"shift":12,"width":1,"signed":false,"min":0,"max":1},{"name":"CHM","label":"CHM","mask":16384,"shift":14,"width":1,"signed":false,"min":0,"max":1,"options":{"0":"SpreadCycle","1":"Constant off-time"}},{"name":"TBL","label":"TBL","mask":98304,"shift":15,"width":2,"signed":false,"min":0,"max":3,"options":{"0":"16 clocks","1":"24 clocks","2":"36 clocks","3":"54 clocks"}},{"name":"VHIGHFS","label":"VHIGHFS","mask":262144,"shift":18,"width":1,"signed":false,"min":0,"max":1},{"name":"VHIGHCHM","label":"VHIGHCHM","mask":524288,"shift":19,"width":1,"signed":false,"min":0,"max":1},{"name":"TPFD","label":"TPFD","mask":15728640,"shift":20,"width":4,"signed":false,"min":0,"max":15},{"name":"MRES","label":"MRES","mask":251658240,"shift":24,"width":4,"signed":false,"min":0,"max":15,"options":{"0":"256 \u00b5steps","1":"128 \u00b5steps","2":"64 \u00b5steps","3":"32 \u00b5steps","4":"16 \u00b5steps","5":"8 \u00b5steps","6":"4 \u00b5steps","7":"2 \u00b5steps","8":"Full step"}},{"name":"INTPOL","label":"INTPOL","mask":268435456,"shift":28,"width":1,"signed":false,"min":0,"max":1},{"name":"DEDGE","label":"DEDGE","mask":536870912,"shift":29,"width":1,"signed":false,"min":0,"max":1,"note":"1 counts both STEP edges; 0 counts one edge per pulse."},{"name":"DISS2G","label":"DISS2G","mask":1073741824,"shift":30,"width":1,"signed":false,"min":0,"max":1,"note":"Disables short-to-GND protection when set."},{"name":"DISS2VS","label":"DISS2VS","mask":2147483648,"shift":31,"width":1,"signed":false,"min":0,"max":1,"note":"Disables short-to-VS protection when set."}],"desc":"Chopper and microstep configuration.","default":0,"constant":"TMC2160_CHOPCONF","danger":false,"note":""},{"name":"COOLCONF","addr":109,"access":"W","fields":[{"name":"SEMIN","label":"SEMIN","mask":15,"shift":0,"width":4,"signed":false,"min":0,"max":15,"note":"0 disables CoolStep."},{"name":"SEUP","label":"SEUP","mask":96,"shift":5,"width":2,"signed":false,"min":0,"max":3},{"name":"SEMAX","label":"SEMAX","mask":3840,"shift":8,"width":4,"signed":false,"min":0,"max":15},{"name":"SEDN","label":"SEDN","mask":24576,"shift":13,"width":2,"signed":false,"min":0,"max":3},{"name":"SEIMIN","label":"SEIMIN","mask":32768,"shift":15,"width":1,"signed":false,"min":0,"max":1},{"name":"SGT","label":"SGT","mask":8323072,"shift":16,"width":7,"signed":true,"min":-64,"max":63},{"name":"SFILT","label":"SFILT","mask":16777216,"shift":24,"width":1,"signed":false,"min":0,"max":1}],"desc":"CoolStep and StallGuard2 configuration.","default":0,"constant":"TMC2160_COOLCONF","danger":false,"note":""},{"name":"DCCTRL","addr":110,"access":"W","fields":[{"name":"DC_TIME","label":"DC_TIME","mask":1023,"shift":0,"width":10,"signed":false,"min":0,"max":1023},{"name":"DC_SG","label":"DC_SG","mask":16711680,"shift":16,"width":8,"signed":false,"min":0,"max":255}],"desc":"DcStep commutation and stall-detection timing.","default":0,"constant":"TMC2160_DCCTRL","danger":false,"note":""},{"name":"DRV_STATUS","addr":111,"access":"R","fields":[{"name":"SG_RESULT","label":"SG_RESULT","mask":1023,"shift":0,"width":10,"signed":false,"min":0,"max":1023},{"name":"S2VSA","label":"S2VSA","mask":4096,"shift":12,"width":1,"signed":false,"min":0,"max":1},{"name":"S2VSB","label":"S2VSB","mask":8192,"shift":13,"width":1,"signed":false,"min":0,"max":1},{"name":"STEALTH","label":"STEALTH","mask":16384,"shift":14,"width":1,"signed":false,"min":0,"max":1},{"name":"FSACTIVE","label":"FSACTIVE","mask":32768,"shift":15,"width":1,"signed":false,"min":0,"max":1},{"name":"CS_ACTUAL","label":"CS_ACTUAL","mask":2031616,"shift":16,"width":5,"signed":false,"min":0,"max":31},{"name":"STALLGUARD","label":"STALLGUARD","mask":16777216,"shift":24,"width":1,"signed":false,"min":0,"max":1},{"name":"OT","label":"OT","mask":33554432,"shift":25,"width":1,"signed":false,"min":0,"max":1},{"name":"OTPW","label":"OTPW","mask":67108864,"shift":26,"width":1,"signed":false,"min":0,"max":1},{"name":"S2GA","label":"S2GA","mask":134217728,"shift":27,"width":1,"signed":false,"min":0,"max":1},{"name":"S2GB","label":"S2GB","mask":268435456,"shift":28,"width":1,"signed":false,"min":0,"max":1},{"name":"OLA","label":"OLA","mask":536870912,"shift":29,"width":1,"signed":false,"min":0,"max":1},{"name":"OLB","label":"OLB","mask":1073741824,"shift":30,"width":1,"signed":false,"min":0,"max":1},{"name":"STST","label":"STST","mask":2147483648,"shift":31,"width":1,"signed":false,"min":0,"max":1}],"desc":"Driver status and diagnostics.","default":0,"constant":"TMC2160_DRV_STATUS","danger":false,"note":""},{"name":"PWMCONF","addr":112,"access":"W","fields":[{"name":"PWM_OFS","label":"PWM_OFS","mask":255,"shift":0,"width":8,"signed":false,"min":0,"max":255},{"name":"PWM_GRAD","label":"PWM_GRAD","mask":65280,"shift":8,"width":8,"signed":false,"min":0,"max":255},{"name":"PWM_FREQ","label":"PWM_FREQ","mask":196608,"shift":16,"width":2,"signed":false,"min":0,"max":3},{"name":"PWM_AUTOSCALE","label":"PWM_AUTOSCALE","mask":262144,"shift":18,"width":1,"signed":false,"min":0,"max":1},{"name":"PWM_AUTOGRAD","label":"PWM_AUTOGRAD","mask":524288,"shift":19,"width":1,"signed":false,"min":0,"max":1},{"name":"FREEWHEEL","label":"FREEWHEEL","mask":3145728,"shift":20,"width":2,"signed":false,"min":0,"max":3,"options":{"0":"Normal operation","1":"Freewheeling","2":"Coil short using LS drivers","3":"Coil short using HS drivers"}},{"name":"PWM_REG","label":"PWM_REG","mask":251658240,"shift":24,"width":4,"signed":false,"min":0,"max":15},{"name":"PWM_LIM","label":"PWM_LIM","mask":4026531840,"shift":28,"width":4,"signed":false,"min":0,"max":15}],"desc":"StealthChop PWM configuration.","default":0,"constant":"TMC2160_PWMCONF","danger":false,"note":""},{"name":"PWM_SCALE","addr":113,"access":"R","fields":[{"name":"PWM_SCALE_SUM","label":"PWM_SCALE_SUM","mask":255,"shift":0,"width":8,"signed":false,"min":0,"max":255},{"name":"PWM_SCALE_AUTO","label":"PWM_SCALE_AUTO","mask":33488896,"shift":16,"width":9,"signed":true,"min":-255,"max":255}],"desc":"StealthChop PWM scaler status.","default":0,"constant":"TMC2160_PWM_SCALE","danger":false,"note":""},{"name":"PWM_AUTO","addr":114,"access":"R","fields":[{"name":"PWM_OFS_AUTO","label":"PWM_OFS_AUTO","mask":255,"shift":0,"width":8,"signed":false,"min":0,"max":255},{"name":"PWM_GRAD_AUTO","label":"PWM_GRAD_AUTO","mask":16711680,"shift":16,"width":8,"signed":false,"min":0,"max":255}],"desc":"StealthChop automatic tuning results.","default":0,"constant":"TMC2160_PWM_AUTO","danger":false,"note":""},{"name":"LOST_STEPS","addr":115,"access":"R","fields":[{"name":"LOST_STEPS","label":"LOST_STEPS","mask":1048575,"shift":0,"width":20,"signed":false,"min":0,"max":1048575}],"desc":"Count of steps skipped by DcStep.","default":0,"constant":"TMC2160_LOST_STEPS","danger":false,"note":""}];
const byName = Object.fromEntries(REGS.map(r=>[r.name,r]));

/* Human-readable help for configurable fields and wizard inputs. */
const FIELD_HELP = {
 RECALIBRATE:"Request a recalibration of the internal current-sense offsets.",
 FASTSTANDSTILL:"Use faster standstill detection after STEP pulses stop.",
 EN_PWM_MODE:"Enable StealthChop voltage PWM operation; other speed thresholds determine when it is used.",
 MULTISTEP_FILT:"Filter very short STEP pulses for improved STEP/DIR signal robustness.",
 SHAFT:"Invert the interpreted DIR input and reverse motor rotation direction.",
 DIAG0_STALL:"Route StallGuard stall indication to DIAG0 when StallGuard is operating in its valid speed range.",
 DIAG1_STALL:"Route StallGuard stall indication to DIAG1 when StallGuard is operating in its valid speed range.",
 DIAG0_INT_PUSHPULL:"Select push-pull output rather than open-drain for DIAG0.",
 DIAG1_POSCOMP_PUSHPULL:"Select push-pull output rather than open-drain for DIAG1.",
 DIRECT_MODE:"Bypass normal STEP/DIR control; coil currents can then be set through XDIRECT.",
 TEST_MODE:"Factory test functionality. Keep disabled in normal operation.",
 DRVSTRENGTH:"Select the external MOSFET gate-driver strength. Verify switching waveforms, ringing and heat before increasing it.",
 BBMTIME:"MOSFET break-before-make timing setting; helps prevent cross-conduction between bridge transistors.",
 BBMCLKS:"Additional break-before-make timing clock configuration for the external MOSFET bridge.",
 OTSELECT:"Select the overtemperature threshold for the driver IC.",
 FILT_ISENSE:"Set the input filtering time for the phase-current sensing amplifier.",
 GLOBAL_SCALER:"Scale both run and hold phase currents. 0 means full-scale (256/256); normal selectable values are 32–255.",
 IHOLD:"Standstill current scale, from 1/32 (0) to 32/32 (31), multiplied by GLOBAL_SCALER.",
 IRUN:"Motor running-current scale, from 1/32 (0) to 32/32 (31), multiplied by GLOBAL_SCALER. Values 16–31 generally give finer microstep performance.",
 IHOLDDELAY:"Controls the time used to reduce current from run level to hold level after standstill is detected.",
 TPOWERDOWN:"Delay after stopping before reducing motor current to IHOLD. Raw units depend on the driver clock.",
 TPWMTHRS:"Velocity threshold for switching between StealthChop and SpreadCycle operation. Expressed in TSTEP units, not RPM.",
 TCOOLTHRS:"Low-speed boundary for CoolStep/StallGuard activation. Expressed in TSTEP units, not RPM.",
 THIGH:"High-speed threshold used by selected chopper and motion-dependent features. Expressed in TSTEP units.",
 TOFF:"Chopper off-time setting. 0 disables the motor output stage; nonzero values enable chopping.",
 HSTRT:"SpreadCycle hysteresis start value; tunes current regulation and motor noise.",
 HEND:"SpreadCycle hysteresis end value; tunes chopper hysteresis/current ripple.",
 CHM:"Switch between SpreadCycle hysteresis chopper and constant off-time chopper.",
 TBL:"Current comparator blanking time after switching: 16, 24, 36 or 54 clock cycles.",
 TPFD:"Passive fast-decay time adjustment used by the chopper.",
 MRES:"Select STEP input resolution: 256 microsteps down to full step.",
 INTPOL:"Interpolate incoming STEP pulses to 256 internal microsteps for smoother motion.",
 DEDGE:"When enabled, both rising and falling STEP edges are counted instead of only one edge.",
 DISS2G:"Disable short-to-ground protection if set to 1. Keep at 0 for safety.",
 DISS2VS:"Disable short-to-supply protection if set to 1. Keep at 0 for safety.",
 SEMIN:"CoolStep lower StallGuard threshold. Setting 0 disables automatic CoolStep current control.",
 SEMAX:"CoolStep upper StallGuard threshold; controls when automatic current reduction begins.",
 SEUP:"CoolStep current-increase step rate when load rises.",
 SEDN:"CoolStep current-decrease step rate when load falls.",
 SEIMIN:"Choose the lower limit allowed for CoolStep current reduction.",
 SGT:"StallGuard2 sensitivity adjustment, -64 to +63. Calibrate experimentally for the motor and operating speed.",
 SFILT:"Enable filtering of StallGuard measurements, improving stability at the cost of response speed.",
 PWM_OFS:"Initial StealthChop PWM amplitude offset.",
 PWM_GRAD:"StealthChop PWM amplitude gradient with motor velocity.",
 PWM_FREQ:"Select StealthChop PWM switching-frequency setting.",
 PWM_AUTOSCALE:"Automatically adjust StealthChop PWM amplitude to match current demand.",
 PWM_AUTOGRAD:"Automatically tune the StealthChop PWM gradient.",
 FREEWHEEL:"Choose the bridge behavior at standstill, including freewheel or active coil shorting.",
 PWM_REG:"StealthChop automatic PWM regulation response parameter.",
 PWM_LIM:"Limit for the StealthChop automatic PWM controller.",
 SG_RESULT:"StallGuard load measurement; use it to assess motor load and tune SGT.",
 CS_ACTUAL:"Currently applied motor current scale, which may vary under CoolStep control.",
 STALLGUARD:"Stall indication status bit; interpret only when conditions for StallGuard operation are met.",
 OT:"Overtemperature shutdown indication.", OTPW:"Overtemperature pre-warning indication.",
 OLA:"Phase A open-load status indicator.", OLB:"Phase B open-load status indicator.",
 S2GA:"Phase A short-to-ground status.", S2GB:"Phase B short-to-ground status.",
 S2VSA:"Phase A short-to-supply status.", S2VSB:"Phase B short-to-supply status.",
 STST:"Motor standstill detection status.",
};

/* Additional explanations derived from TMC2160/A datasheet rev. 1.10, register tables (pp. 24–42). */
Object.assign(FIELD_HELP, {
 "DIAG0_ERROR__ONLY_WITH_SD_MODE_1_": "When enabled, DIAG0 indicates driver errors such as overtemperature shutdown or short-to-ground. DIAG0 also reports reset status (active low during reset).",
 "DIAG0_OTPW__ONLY_WITH_SD_MODE_1_": "When enabled, DIAG0 indicates the driver overtemperature prewarning (OTPW), allowing firmware to respond before shutdown.",
 "DIAG1_INDEX": "Route the microstep index pulse to DIAG1; useful for tracking the sine-wave microstep sequence.",
 "DIAG1_ONSTATE": "Route the power-stage on-state indication to DIAG1 for diagnostics.",
 "DIAG1_STEPS_SKIPPED": "Route the DcStep skipped-step indication to DIAG1; meaningful only when DcStep is enabled.",
 "SMALL_HYSTERESIS": "Select reduced hysteresis for the SpreadCycle chopper to influence hysteresis behavior at low current.",
 "STOP_ENABLE": "Enable the STOP input functionality for stopping motor operation under an external stop condition.",
 "RESET": "Latched flag indicating a driver reset since it was last cleared; write 1 to this GSTAT bit to acknowledge/clear.",
 "DRV_ERR": "Latched driver error indicator (e.g. overtemperature or short circuit); write 1 to clear after inspecting fault status.",
 "UV_CP": "Charge-pump undervoltage event flag; write 1 to clear. Check gate-supply / charge-pump conditions if set.",
 "STEP": "Readback of the logic level currently present on the STEP input pin.",
 "DIR": "Readback of the logic level currently present on the DIR input pin.",
 "DCEN_CFG4": "Readback of DCEN/CFG4 input pin used for DcStep or standalone configuration.",
 "DCIN_CFG5": "Readback of DCIN/CFG5 input pin used for DcStep or standalone configuration.",
 "DRV_ENN": "Readback of the active-low driver enable input (DRV_ENN).",
 "DCO_CFG6": "Readback of DCO/CFG6 input pin used for DcStep / standalone configuration.",
 "VERSION": "Read-only IC version identifier in IOIN bits 31:24; useful for checking SPI communication.",
 "OTPBIT": "Choose which bit in the selected OTP byte to program. OTP programming is irreversible; do not use during normal initialization.",
 "OTPBYTE": "Select the OTP configuration byte to program. OTP memory can only be programmed in one direction; use extreme care.",
 "OTPMAGIC": "Required programming key for the OTP programming mechanism. Writing OTP irreversibly changes power-up defaults.",
 "OTP_TBL": "Factory OTP bit controlling the reset default for the chopper blanking-time selection.",
 "OTP_BBM": "Factory OTP bit controlling the reset default for MOSFET break-before-make clock timing.",
 "OTP_S2_LEVEL": "Factory OTP bit selecting the short-detection threshold reset default.",
 "OTP_FCLKTRIM": "Factory-programmed oscillator-trim bits. They vary by chip; do not change them casually.",
 "FCLKTRIM": "Fine trim of the internal oscillator. Factory calibrated close to 12 MHz and should generally remain unchanged.",
 "S2VS_LEVEL": "Low-side bridge short-to-supply detector sensitivity. 4 is more sensitive; 15 is less sensitive. Values 1–3 can false-trigger from sense resistor voltage.",
 "S2GND_LEVEL": "High-side bridge short-to-ground detector sensitivity. 2 is most sensitive; 15 least. Below 6 is not recommended when supply exceeds 52 V.",
 "SHORTFILTER": "Short-circuit detector glitch filtering: 0 = 100 ns, 1 = 1 µs, 2 = 2 µs, 3 = 3 µs. Increasing it can suppress false trips.",
 "SHORTDELAY": "Additional delay before short-circuit detection, useful for MOSFET bridges with slower switching edges.",
 "OFFSET_READ_B": "Signed offset calibration result of motor phase B current-sense amplifier; readback diagnostic, not a current setting.",
 "OFFSET_READ_A": "Signed offset calibration result of motor phase A current-sense amplifier; readback diagnostic, not a current setting.",
 "TSTEP": "Measured time interval corresponding to motor stepping in the 1/256 microstep timebase. Larger TSTEP means slower movement; read-only.",
 "COIL_A": "Signed direct-mode phase A current amplitude command, scaled approximately from −255 through +255. Effective when GCONF.DIRECT_MODE is enabled.",
 "COIL_B": "Signed direct-mode phase B current amplitude command, scaled approximately from −255 through +255. Effective when GCONF.DIRECT_MODE is enabled.",
 "VDCMIN": "Minimum velocity threshold used to activate DcStep operation. DcStep requires careful tuning; zero disables threshold activation.",
 "W0": "Lookup-table compression step-width coding for segment 0 (start through X1−1). For a customized microstep sine-wave table.",
 "W1": "Lookup-table compression step-width coding for segment 1 (X1 through X2−1). For a customized microstep sine-wave table.",
 "W2": "Lookup-table compression step-width coding for segment 2 (X2 through X3−1). For a customized microstep sine-wave table.",
 "W3": "Lookup-table compression step-width coding for segment 3 (X3 through 255). For a customized microstep sine-wave table.",
 "X1": "First LUT segment breakpoint. Maintain 0 < X1 < X2 < X3 when programming a custom sine-wave table.",
 "X2": "Second LUT segment breakpoint. Maintain 0 < X1 < X2 < X3 when programming a custom sine-wave table.",
 "X3": "Third LUT segment breakpoint. Maintain 0 < X1 < X2 < X3 when programming a custom sine-wave table.",
 "START_SIN": "Sine lookup-table starting amplitude offset for the first quadrant.",
 "START_SIN90": "Sine lookup-table starting amplitude for the 90-degree position.",
 "MSCNT": "Read-only microstep counter indicating the position in the sine-wave cycle, from 0 through 1023.",
 "CUR_A": "Read-only signed sine-table amplitude for phase A before current scaling. Not the measured motor current.",
 "CUR_B": "Read-only signed sine-table amplitude for phase B before current scaling. Not the measured motor current.",
 "TFD_ALL": "Low three bits of fast-decay time in constant-off-time mode (CHM=1); shares bits with SpreadCycle HSTRT.",
 "OFFSET": "Sine-wave current comparator offset for constant-off-time mode (CHM=1); shares bits with SpreadCycle HEND.",
 "TFD_3": "High bit of the fast-decay time value in constant-off-time mode (CHM=1).",
 "DISFDCC": "Disable the fast-decay current comparator in constant-off-time mode. Relevant only with CHM=1.",
 "VHIGHFS": "Switch to fullstep operation above the THIGH high-speed velocity threshold when enabled.",
 "VHIGHCHM": "Switch to an alternate chopper mode above the THIGH high-speed threshold when enabled.",
 "DC_TIME": "DcStep upper chopper on-time boundary, in driver clock periods. Set just above effective blanking time.",
 "DC_SG": "DcStep step-loss detection upper on-time limit. 0 disables; tune in relationship to DC_TIME (normally slightly above DC_TIME/16).",
 "STEALTH": "Read-only status flag indicating active StealthChop operation.",
 "FSACTIVE": "Read-only fullstep-active state; indicates high-speed fullstep mode is currently engaged.",
 "PWM_SCALE_SUM": "Read-only actual StealthChop PWM amplitude scale/duty, 0–255. Used with sine-table currents.",
 "PWM_SCALE_AUTO": "Read-only signed PWM scale adjustment produced by the StealthChop automatic current regulator.",
 "PWM_OFS_AUTO": "Read-only automatically identified StealthChop PWM offset; useful for tuning a startup PWM_OFS.",
 "PWM_GRAD_AUTO": "Read-only automatically identified StealthChop PWM gradient; useful for tuning startup PWM_GRAD.",
 "LOST_STEPS": "Read-only count of skipped steps detected by DcStep. Not a general-purpose missed-step counter when DcStep is off.",
 "SGT": "StallGuard2 sensitivity control (signed −64 to +63). Lower values make stall detection MORE sensitive; higher values make it LESS sensitive. Begin at 0 and calibrate at your real operating speed and load.",
 "SFILT": "StallGuard2 measurement filtering. 0 = standard, high-update-rate signal; 1 = filtered measurement, updated once per four full steps for smoother readings but slower response.",
 "TOFF": "Chopper off-time / output-stage enable. 0 turns all bridges off. 1 is allowed only when TBL is at least 2; typical motor operation uses 2–15. Tune together with TBL and hysteresis.",
 "SEMIN": "CoolStep lower StallGuard threshold. 0 disables CoolStep; increasing from zero enables load-dependent current adjustment within the permitted speed window.",
 "S2GA": "Short to GND detected in phase A bridge. Fault may disable outputs; investigate MOSFETs, motor wiring, and detection settings.",
 "S2GB": "Short to GND detected in phase B bridge. Fault may disable outputs; investigate MOSFETs, motor wiring, and detection settings.",
 "OTPW": "IC temperature prewarning flag; a warning before thermal shutdown, not a measurement of motor winding temperature.",
 "OT": "IC overtemperature shutdown flag; this is die temperature protection, not motor temperature measurement.",
 "DRVSTRENGTH": "MOSFET gate drive current: 0 weak, 1 weak with temperature compensation, 2 medium, 3 strong. Datasheet advises selecting the lowest setting that produces adequately fast switching and validating with an oscilloscope.",
 "BBMTIME": "Analog break-before-make time: 0 about 100 ns, 16 about 200 ns, 24 about 375 ns; values above 24 not recommended. Choose sufficient dead time to avoid shoot-through, with margin.",
 "BBMCLKS": "Additional digital break-before-make time (0–15 driver clocks; typically ~83 ns/clock at 12 MHz). The longer of BBMTIME and BBMCLKS determines effective dead time.",
 "FILT_ISENSE": "Current-sense amplifier filter constant: 0 = 100 ns, 1 = 200 ns, 2 = 300 ns, 3 = 400 ns. Increase to suppress switching cross-coupling if needed.",
 "GLOBAL_SCALER": "Global motor current scaling. 0 means 256/256 (full scale), or select 32–255. Values 1–31 are not valid for normal current control.",
 "TBL": "Comparator blanking time after MOSFET switching: 0 = 16, 1 = 24, 2 = 36, 3 = 54 clock cycles. Too short may react to ringing; too long compromises regulation.",
 "TPOWERDOWN": "Delay from standstill detection to switch from IRUN to IHOLD, in units of 2^18/fCLK seconds (≈21.85 ms per count at 12 MHz)."
});
const WIZ_HELP = {
 wMotorCurrent:"Target rated RMS phase current, in amperes. The wizard calculates register settings from this and Rsense.",
 wFullSteps:"Number of full motor steps per mechanical revolution, often 200 for a 1.8° stepper.",
 wHoldPercent:"Desired standstill current as a percentage of the configured running current.",
 wRsense:"Actual per-phase sense resistance in milliohms, used for current calculations. Do not enter winding resistance.",
 wClockMHz:"Driver clock frequency in MHz. Required for converting RPM and delays into register values.",
 wVm:"Motor supply voltage in volts; shown for reference, not automatically used to tune MOSFET protection.",
 wMicrosteps:"STEP input microstep resolution; the MRES register field is set accordingly.",
 wInterpolation:"Interpolate external STEP resolution to 256 internal microsteps.",
 wMultistep:"Filter short STEP signals using GCONF.MULTISTEP_FILT.",
 wReverse:"Reverse the interpreted DIR input via GCONF.SHAFT.",
 wDoubleEdge:"Count both rising and falling STEP edges. Leave off unless your pulse generator expects it.",
 wPwmRpm:"Motor RPM above which the wizard switches away from StealthChop to SpreadCycle.",
 wToff:FIELD_HELP.TOFF,wTbl:FIELD_HELP.TBL,wIholdDelay:FIELD_HELP.IHOLDDELAY,
 wKeepHyst:"Leave the existing SpreadCycle hysteresis fields unchanged.",
 wStallEnable:"Set a StallGuard speed window and optionally connect a DIAG output.",
 wStallRpm:"Minimum motor RPM at which StallGuard is intended to operate.",
 wSgt:FIELD_HELP.SGT,wDiag:"Choose no DIAG output, DIAG0, or DIAG1 for StallGuard indication.",
 wSfilt:FIELD_HELP.SFILT,wCoolEnable:"Allow CoolStep to adjust motor current based on the measured load.",
 wSemin:FIELD_HELP.SEMIN,wSemax:FIELD_HELP.SEMAX,wSeup:FIELD_HELP.SEUP,wSedn:FIELD_HELP.SEDN,
 wSeimin:FIELD_HELP.SEIMIN,wDrvStrength:FIELD_HELP.DRVSTRENGTH,
 wPowerdownMs:"Time after motor standstill before hold current is used, in milliseconds.",
 wProtect:"Keep short-to-ground and short-to-supply protections enabled.",
 rsense:"Actual hardware current-sense resistor in milliohms, used to estimate RMS motor current.",
 vfs:"Current-sense full-scale voltage in millivolts used by this calculator; verify the assumed value for your hardware.",
 channelExpr:"C expression used as the channel argument in the generated single-channel write calls.",
 outputMode:"Choose whether to generate the entire multi-channel configuration or writes for just the selected channel.",
 hexValue:"Raw 32-bit register word expressed in hexadecimal.",
 decValue:"Raw 32-bit register word expressed as an unsigned decimal integer.",
 binValue:"Raw 32-bit register word expressed in binary.",
};
function escapeHelp(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function helpBadge(title,description,registerName=null){
 return `<span class="help-wrap"><button type="button" class="help-icon" aria-label="Information about ${escapeHelp(title)}" aria-expanded="false">?</button>`+
 `<span class="help-tooltip" role="tooltip"><b>${escapeHelp(title)}</b>${escapeHelp(description)}`+
 (registerName ? `<a href="${DATASHEET_URL}#page=${DATASHEET_PAGES[registerName]||24}" target="_blank" rel="noopener noreferrer">TMC2160A datasheet · ${escapeHelp(registerName)}</a>` : `<small style="display:block;margin-top:6px;color:#8fb8d0">Source: TMC2160A datasheet Rev. 1.10 and configurator guidance</small>`)+`</span></span>`;
}
const DATASHEET_PAGES = {"GCONF": 24, "GSTAT": 25, "IOIN": 25, "OTP_PROG": 27, "OTP_READ": 29, "FACTORY_CONF": 26, "SHORT_CONF": 26, "DRV_CONF": 27, "GLOBAL_SCALER": 27, "OFFSET_READ": 27, "IHOLD_IRUN": 30, "TPOWERDOWN": 31, "TSTEP": 31, "TPWMTHRS": 31, "TCOOLTHRS": 32, "THIGH": 32, "XDIRECT": 33, "VDCMIN": 33, "MSLUTSEL": 36, "MSLUTSTART": 36, "MSCNT": 33, "MSCURACT": 33, "CHOPCONF": 37, "COOLCONF": 39, "DCCTRL": 34, "DRV_STATUS": 40, "PWMCONF": 41, "PWM_SCALE": 34, "PWM_AUTO": 35, "LOST_STEPS": 35};
const DATASHEET_URL = "https://www.analog.com/media/en/technical-documentation/data-sheets/TMC2160A_datasheet_rev1.10.pdf";
function fieldHelp(r,f){
 const details=FIELD_HELP[f.name]||f.note||`Field in ${r.name}: ${r.desc||'Driver register configuration.'} Refer to the register description and value range below.`;
 const range=`Valid range: ${f.min} to ${f.max}. Bits: ${bitRange(f)}.`;
 const options=f.options?` Options: ${Object.entries(f.options).map(([n,t])=>`${n} = ${t}`).join('; ')}.`:'';
 return `${details} ${range}${options}${f.note && details!==f.note?' '+f.note:''}`;
}
function addStaticHelp(){
 for(const [id,desc] of Object.entries(WIZ_HELP)){
  const input=document.getElementById(id); if(!input)continue;
  const ancestor=input.closest('.wiz-row,.group');
  if(!ancestor)continue;
  const label=ancestor.querySelector('.wiz-label,.group > label,.wiz-option');
  if(!label || label.querySelector('.help-wrap'))continue;
  const name=label.textContent.trim().replace(/\s+/g,' ').slice(0,65)||id;
  label.insertAdjacentHTML('beforeend',helpBadge(name,desc));
 }
 // Radio choices are independently configurable parameters.
 document.querySelectorAll('#wizardModal .wiz-option input[type="radio"]').forEach(input=>{
  const label=input.closest('.wiz-option');if(!label)return;
  const desc=input.value==='irun'?'Use IRUN for current scale, leaving GLOBAL_SCALER at 0 (full scale).':
   input.value==='global'?'Use both IRUN and GLOBAL_SCALER for finer current control.':
   input.value==='spread'?'Run SpreadCycle over the motor speed range.':
   'Use StealthChop at low speeds and SpreadCycle above the configured RPM threshold.';
  label.insertAdjacentHTML('beforeend',helpBadge(label.querySelector('b')?.textContent||input.value,desc));
 });
 document.addEventListener('click',e=>{
  const btn=e.target.closest('.help-icon');
  document.querySelectorAll('.help-wrap.open').forEach(w=>{
   if(!btn || w!==btn.closest('.help-wrap')){w.classList.remove('open');w.querySelector('.help-icon').setAttribute('aria-expanded','false');}
  });
  if(btn){e.preventDefault();e.stopPropagation();const w=btn.closest('.help-wrap');w.classList.toggle('open');btn.setAttribute('aria-expanded',String(w.classList.contains('open')));}
 });
 document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.help-wrap.open').forEach(w=>w.classList.remove('open'));});
}

let selected = "GCONF";
let filter = "all";

const writable = r => r.access.includes("W");

function createChannelState(){
  const v={}, inc={};
  for(const r of REGS){
    v[r.name]=r.default>>>0;
    inc[r.name]=false;
  }
  return {
    values:v,
    included:inc,
    meta:{rsense:20,vfs:325,name:""}
  };
}

let channelCount = 3;
let activeChannel = 0;
const channelStates = Array.from({length:channelCount},()=>createChannelState());

/* Existing editor code continues to use values/included.
   These references are changed whenever the active channel changes. */
let values = channelStates[0].values;
let included = channelStates[0].included;

function saveActiveChannelMeta(){
  const rs=document.getElementById("rsense");
  const vf=document.getElementById("vfs");
  if(rs) channelStates[activeChannel].meta.rsense=Number(rs.value)||20;
  if(vf) channelStates[activeChannel].meta.vfs=Number(vf.value)||325;
}

function refreshChannelSelectors(){
  const sel=document.getElementById("activeChannelSelect");
  if(!sel) return;
  sel.innerHTML="";
  for(let i=0;i<channelCount;i++){
    const o=document.createElement("option");
    o.value=String(i);
    o.textContent=`Channel ${i}`;
    if(i===activeChannel)o.selected=true;
    sel.appendChild(o);
  }
}

function activateChannel(index){
  saveActiveChannelMeta();
  index=clamp(Number(index)||0,0,channelCount-1);
  activeChannel=index;
  values=channelStates[index].values;
  included=channelStates[index].included;
  const rs=document.getElementById("rsense");
  const vf=document.getElementById("vfs");
  if(rs)rs.value=channelStates[index].meta.rsense;
  if(vf)vf.value=channelStates[index].meta.vfs;
  refreshChannelSelectors();
  renderList();renderEditor();renderCode();renderChecks();updateCurrent();
}

function setChannelCount(count){
  saveActiveChannelMeta();
  count=clamp(Math.round(Number(count)||1),1,6);
  while(channelStates.length<count) channelStates.push(createChannelState());
  if(channelStates.length>count) channelStates.splice(count);
  channelCount=count;
  if(activeChannel>=channelCount)activeChannel=channelCount-1;
  values=channelStates[activeChannel].values;
  included=channelStates[activeChannel].included;
  refreshChannelSelectors();
  const countSel=document.getElementById("channelCount");
  if(countSel)countSel.value=String(channelCount);
  renderWizardChannelTabs();
  renderList();renderEditor();renderCode();renderChecks();updateCurrent();
}

const isReadOnly = r => r.access === "R";

function hex32(v){ return "0x" + (v>>>0).toString(16).toUpperCase().padStart(8,"0"); }
function bin32(v){ return (v>>>0).toString(2).padStart(32,"0"); }
function parseNum(s, baseHint=10){
  s = String(s).trim().replaceAll("_","");
  if(/^0x/i.test(s)) return Number.parseInt(s,16)>>>0;
  if(/^0b/i.test(s)) return Number.parseInt(s.slice(2),2)>>>0;
  return Number.parseInt(s,baseHint)>>>0;
}
function bitRange(f){
  const hi=f.shift+f.width-1, lo=f.shift;
  return hi===lo ? `${lo}` : `${hi}:${lo}`;
}
function decodeField(v,f){
  let raw = ((v>>>0) & (f.mask>>>0)) >>> f.shift;
  if(f.signed){
    const sign = 1 << (f.width-1);
    if(raw & sign) raw -= (1 << f.width);
  }
  return raw;
}
function encodeField(v,f,x){
  let n=Number(x);
  if(!Number.isFinite(n)) n=0;
  n=Math.max(f.min,Math.min(f.max,n));
  let raw=n;
  if(f.signed && n<0) raw=(1<<f.width)+n;
  const cleared=(v>>>0) & (~(f.mask>>>0)>>>0);
  return (cleared | (((raw<<f.shift)>>>0)&(f.mask>>>0)))>>>0;
}
function setValue(name,v,mark=true){
  values[name]=v>>>0;
  if(mark && writable(byName[name])) included[name]=true;
  renderEditor();
  renderList();
  renderCode();
  renderChecks();
  updateCurrent();
}
function accessClass(a){ return a==="R+WC"?"RWC":a; }

/* Registers that are valid, but normally not needed during ordinary motor setup. */
const ADVANCED_REGISTERS = new Set([
  "OTP_PROG","OTP_READ","FACTORY_CONF","OFFSET_READ",
  "XDIRECT","VDCMIN",
  "MSLUT0","MSLUT1","MSLUT2","MSLUT3","MSLUT4","MSLUT5","MSLUT6","MSLUT7",
  "MSLUTSEL","MSLUTSTART",
  "MSCNT","MSCURACT",
  "DCCTRL","PWM_SCALE","PWM_AUTO","LOST_STEPS"
]);

function fieldDisplayValue(f, value){
  const raw = decodeField(value, f);
  if(f.options && String(raw) in f.options) return `${raw} (${f.options[String(raw)]})`;
  return String(raw);
}

function importantFieldComments(r, value){
  if(!r.fields || !r.fields.length) return [];
  const out = [];
  for(const f of r.fields){
    const v = decodeField(value, f);

    /* Keep C comments useful instead of printing every zero/reserved-like field. */
    const alwaysShow = new Set([
      "IRUN","IHOLD","IHOLDDELAY","GLOBAL_SCALER",
      "TOFF","TBL","MRES","INTPOL","DEDGE","CHM",
      "DRVSTRENGTH","FILT_ISENSE","BBMTIME","BBMCLKS",
      "SEMIN","SEMAX","SEUP","SEDN","SEIMIN","SGT","SFILT",
      "TPWMTHRS","TCOOLTHRS","THIGH","TPOWERDOWN",
      "EN_PWM_MODE","MULTISTEP_FILT","SHAFT",
      "DIAG0_STALL","DIAG1_STALL","DIAG0_INT_PUSHPULL","DIAG1_POSCOMP_PUSHPULL",
      "PWM_OFS","PWM_GRAD","PWM_FREQ","PWM_AUTOSCALE","PWM_AUTOGRAD","PWM_REG","PWM_LIM","FREEWHEEL",
      "DISS2G","DISS2VS"
    ]);
    if(v !== 0 || alwaysShow.has(f.name)){
      out.push(`${f.label || f.name}=${fieldDisplayValue(f, value)}`);
    }
  }
  return out;
}

function renderList(){
  const q=document.getElementById("search").value.trim().toLowerCase();
  const el=document.getElementById("reglist"); el.innerHTML="";
  const hideAdvanced = document.getElementById("hideAdvanced")?.checked ?? false;
  REGS.filter(r=>{
    if(hideAdvanced && ADVANCED_REGISTERS.has(r.name)) return false;
    if(q && !(r.name.toLowerCase().includes(q) || ("0x"+r.addr.toString(16).padStart(2,"0")).includes(q))) return false;
    if(filter==="w" && !writable(r)) return false;
    if(filter==="r" && r.access!=="R") return false;
    if(filter==="changed" && !included[r.name]) return false;
    return true;
  }).forEach(r=>{
    const b=document.createElement("button");
    b.className="regitem"+(r.name===selected?" active":"");
    b.innerHTML=`<span class="addr">0x${r.addr.toString(16).toUpperCase().padStart(2,"0")}</span>
      <span>${r.name}${included[r.name]?' <span style="color:#72df9c">●</span>':''}</span>
      <span class="access ${accessClass(r.access)}">${r.access}</span>`;
    b.onclick=()=>{selected=r.name;renderEditor();renderList()};
    el.appendChild(b);
  });
}

function renderEditor(){
  const r=byName[selected], v=values[selected]>>>0;
  document.getElementById("regName").textContent=`CH${activeChannel} · ${r.name}  ·  0x${r.addr.toString(16).toUpperCase().padStart(2,"0")}`;
  document.getElementById("regDesc").textContent=r.desc||"";
  const badges=document.getElementById("badges");
  badges.innerHTML=`<span class="badge">${r.access}</span><span class="badge">${r.fields.length} fields</span>`+
    (r.danger?`<span class="badge danger">IRREVERSIBLE</span>`:"")+
    (r.note?`<span class="badge warn">NOTE</span>`:"");
  const warning=document.getElementById("regWarning"); warning.innerHTML="";
  if(r.danger) warning.innerHTML=`<div class="dangerbox"><b>OTP warning:</b> ${r.note}</div>`;
  else if(r.note) warning.innerHTML=`<div class="warnbox">${r.note}</div>`;

  const ro=isReadOnly(r);
  const hx=document.getElementById("hexValue"), dc=document.getElementById("decValue"), bn=document.getElementById("binValue");
  hx.value=hex32(v); dc.value=String(v>>>0); bn.value=bin32(v);
  // Read-only status registers remain editable as "observed value" decoders, but they never generate writes.
  hx.disabled=false; dc.disabled=false; bn.disabled=false;
  document.getElementById("includeReg").checked=included[r.name];
  document.getElementById("includeReg").disabled=!writable(r) || r.danger;
  if(r.danger){
    document.getElementById("includeReg").disabled=false;
  }

  const bits=document.getElementById("bits"); bits.innerHTML="";
  for(let i=31;i>=0;i--){
    const on=((v>>>i)&1)!==0;
    const d=document.createElement("button");
    d.type="button";
    d.className="bit "+(on?"on ":"")+(writable(r)?"clickable":"");
    d.innerHTML=`<div class="n">${i}</div>${on?1:0}`;
    d.disabled=!writable(r);
    d.onclick=()=>setValue(r.name,(values[r.name]^(1<<i))>>>0,true);
    bits.appendChild(d);
  }

  const fl=document.getElementById("fields"); fl.innerHTML="";
  if(!r.fields.length){
    fl.innerHTML=`<div class="mini">This register is edited as a raw 32-bit value.</div>`;
  }else{
    r.fields.forEach(f=>{
      const x=decodeField(v,f);
      const row=document.createElement("div"); row.className="fieldrow";
      let control="";
      const disabled = !writable(r) ? " disabled" : "";
      if(f.options){
        const opts=Object.entries(f.options).map(([k,t])=>`<option value="${k}" ${Number(k)===x?'selected':''}>${k} — ${t}</option>`).join("");
        control=`<select class="inp fieldctl" data-field="${f.name}"${disabled}>${opts}</select>`;
      }else if(f.width===1 && !f.signed){
        control=`<label class="checkwrap"><input class="toggle fieldctl" data-field="${f.name}" type="checkbox" ${x?'checked':''}${disabled}> <span>${x?'Enabled / 1':'Disabled / 0'}</span></label>`;
      }else{
        control=`<input class="inp fieldctl" data-field="${f.name}" type="number" min="${f.min}" max="${f.max}" step="1" value="${x}"${disabled}>`;
      }
      row.innerHTML=`<div><div class="fname">${f.label}${helpBadge(f.label,fieldHelp(r,f),r.name)}</div><div class="fmeta">bits ${bitRange(f)} · mask ${hex32(f.mask)}</div>${f.note?`<div class="fnote">${f.note}</div>`:""}</div>
        <div class="fmeta">${f.signed?'signed':'unsigned'}<br>${f.min}…${f.max}</div><div>${control}</div>`;
      fl.appendChild(row);
    });
    fl.querySelectorAll(".fieldctl").forEach(c=>{
      c.addEventListener("change",e=>{
        const f=r.fields.find(x=>x.name===e.target.dataset.field);
        let val=e.target.type==="checkbox" ? (e.target.checked?1:0) : Number(e.target.value);
        setValue(r.name,encodeField(values[r.name],f,val),true);
      });
    });
  }
}

function renderCode(){
  saveActiveChannelMeta();
  const mode=document.getElementById("outputMode").value;
  const ch=document.getElementById("channelExpr").value.trim()||"channel";
  const lines=[];

  lines.push("/* ============================================================= */");
  lines.push("/* TMC2160 configuration generated by the Register Configurator  */");
  lines.push(`/* Channels: ${channelCount}                                              */`);
  lines.push("/* Comments describe the edited/configured settings.              */");
  lines.push("/* Full 32-bit writes are used for write-only registers.          */");
  lines.push("/* ============================================================= */");
  lines.push("");

  if(mode==="struct"){
    /* Each channel may contain a different set of edited registers.
       A register/value pair array keeps that safe and avoids writing
       unconfigured registers just because another channel uses them. */
    lines.push("typedef struct");
    lines.push("{");
    lines.push("    uint8_t  address;");
    lines.push("    uint32_t value;");
    lines.push("} TMC2160_RegisterSetting;");
    lines.push("");
    lines.push("typedef struct");
    lines.push("{");
    lines.push("    const TMC2160_RegisterSetting *settings;");
    lines.push("    uint8_t settingCount;");
    lines.push("} TMC2160_ChannelConfig;");
    lines.push("");

    for(let c=0;c<channelCount;c++){
      const st=channelStates[c];
      const regs=REGS.filter(r=>writable(r) && !r.danger && st.included[r.name]);

      lines.push(`/* ---------------- Channel ${c} ---------------- */`);
      if(!regs.length){
        lines.push(`static const TMC2160_RegisterSetting tmc2160_ch${c}_settings[] = {`);
        lines.push("    { 0, 0 } /* No edited registers */");
        lines.push("};");
      }else{
        lines.push(`static const TMC2160_RegisterSetting tmc2160_ch${c}_settings[] =`);
        lines.push("{");
        for(const r of regs){
          const comments=importantFieldComments(r,st.values[r.name]);
          if(comments.length){
            const compact=comments.slice(0,6).join(" | ");
            lines.push(`    /* ${r.name}: ${compact} */`);
          }else{
            lines.push(`    /* ${r.name}: ${hex32(st.values[r.name])} */`);
          }
          const regToken=r.constant || `0x${r.addr.toString(16).toUpperCase().padStart(2,"0")}`;
          lines.push(`    { ${regToken}, ${hex32(st.values[r.name])} },`);
        }
        lines.push("};");
      }
      lines.push("");
    }

    lines.push(`#define TMC2160_CONFIG_CHANNELS ${channelCount}`);
    lines.push("");
    lines.push("static const TMC2160_ChannelConfig tmc2160Config[TMC2160_CONFIG_CHANNELS] =");
    lines.push("{");
    for(let c=0;c<channelCount;c++){
      const regs=REGS.filter(r=>writable(r) && !r.danger && channelStates[c].included[r.name]);
      const count=regs.length;
      if(count){
        lines.push(`    { tmc2160_ch${c}_settings, (uint8_t)(sizeof(tmc2160_ch${c}_settings) / sizeof(tmc2160_ch${c}_settings[0])) }, // Channel ${c}`);
      }else{
        lines.push(`    { tmc2160_ch${c}_settings, 0 }, // Channel ${c}`);
      }
    }
    lines.push("};");
    lines.push("");
    lines.push("void TMC2160_ApplyChannelConfig(uint8_t channel)");
    lines.push("{");
    lines.push("    if (channel >= TMC2160_CONFIG_CHANNELS)");
    lines.push("        return;");
    lines.push("");
    lines.push("    const TMC2160_ChannelConfig *cfg = &tmc2160Config[channel];");
    lines.push("");
    lines.push("    for (uint8_t i = 0; i < cfg->settingCount; i++)");
    lines.push("    {");
    lines.push("        TMC2160_WriteInt(channel,");
    lines.push("                         cfg->settings[i].address,");
    lines.push("                         cfg->settings[i].value);");
    lines.push("    }");
    lines.push("}");
    lines.push("");
    lines.push("/* Example:");
    lines.push("   for (uint8_t ch = 0; ch < TMC2160_CONFIG_CHANNELS; ch++)");
    lines.push("       TMC2160_ApplyChannelConfig(ch);");
    lines.push("*/");
  }else{
    const st=channelStates[activeChannel];
    const selectedRegs=REGS.filter(r=>writable(r) && !r.danger &&
      (mode==="writable" || st.included[r.name]));

    lines.push(`/* Active editor channel: ${activeChannel} */`);
    lines.push("");
    if(!selectedRegs.length) lines.push("/* No writable registers selected. */");

    for(const r of selectedRegs){
      const regToken=r.constant || `0x${r.addr.toString(16).toUpperCase().padStart(2,"0")}`;
      const comments=importantFieldComments(r,st.values[r.name]);

      lines.push(`/* ${r.name} (0x${r.addr.toString(16).toUpperCase().padStart(2,"0")}) */`);
      if(r.desc) lines.push(`/* ${r.desc} */`);
      if(comments.length){
        for(let i=0;i<comments.length;i+=3)
          lines.push(`/* ${comments.slice(i,i+3).join(" | ")} */`);
      }else{
        lines.push(`/* Raw value: ${hex32(st.values[r.name])} */`);
      }

      lines.push(`TMC2160_WriteInt(${ch}, ${regToken}, ${hex32(st.values[r.name])});`);
      lines.push("");
    }
  }

  document.getElementById("code").value=lines.join("\n");
}

function renderChecks(){
  const issues=[];
  const g=values.GCONF>>>0, ch=values.CHOPCONF>>>0, gs=values.GLOBAL_SCALER&0xFF;
  const get=(rn,fn)=>decodeField(values[rn],byName[rn].fields.find(f=>f.name===fn));
  const toff=get("CHOPCONF","TOFF");
  const dedge=get("CHOPCONF","DEDGE");
  const diss2g=get("CHOPCONF","DISS2G");
  const diss2vs=get("CHOPCONF","DISS2VS");
  const test=get("GCONF","TEST_MODE");
  const direct=get("GCONF","DIRECT_MODE");
  const sgt=get("COOLCONF","SGT");
  if(gs>0 && gs<32) issues.push(["danger",`GLOBAL_SCALER=${gs} is not valid for normal operation. Use 0 or 32…255.`]);
  if(toff===0) issues.push(["warn","CHOPCONF.TOFF=0 disables the motor chopper/output stage."]);
  if(dedge===1) issues.push(["warn","DEDGE=1 counts both rising and falling STEP edges."]);
  if(diss2g) issues.push(["danger","DISS2G=1 disables short-to-ground protection."]);
  if(diss2vs) issues.push(["danger","DISS2VS=1 disables short-to-supply protection."]);
  if(test) issues.push(["danger","GCONF.TEST_MODE=1. Datasheet says to keep this 0 for normal operation."]);
  if(direct) issues.push(["warn","GCONF.DIRECT_MODE=1: STEP/DIR sequencer is bypassed and XDIRECT controls coil current."]);
  if(included.OTP_PROG) issues.push(["danger","OTP_PROG is included. OTP programming is irreversible; the generated line remains commented out."]);
  const diag0=get("GCONF","DIAG0_STALL"), diag1=get("GCONF","DIAG1_STALL");
  if((diag0||diag1) && (values.TCOOLTHRS&0xFFFFF)===0) issues.push(["warn","Stall DIAG output is enabled while TCOOLTHRS=0; StallGuard DIAG will not be enabled by the velocity threshold."]);
  if(!issues.length) issues.push(["good","No obvious configuration warnings detected."]);
  const el=document.getElementById("issues"); el.innerHTML=issues.map(([c,t])=>`<div class="issue ${c}">${t}</div>`).join("");
}

function updateCurrent(){
  const rs=Number(document.getElementById("rsense").value), vfs=Number(document.getElementById("vfs").value)/1000;
  if(!(rs>0) || !(vfs>0)){document.getElementById("runCurrent").textContent="—";document.getElementById("holdCurrent").textContent="—";return}
  let gs=values.GLOBAL_SCALER&0xFF; if(gs===0) gs=256;
  const irun=decodeField(values.IHOLD_IRUN,byName.IHOLD_IRUN.fields.find(f=>f.name==="IRUN"));
  const ihold=decodeField(values.IHOLD_IRUN,byName.IHOLD_IRUN.fields.find(f=>f.name==="IHOLD"));
  const max=(gs/256)*(vfs/(rs/1000))/Math.sqrt(2);
  const run=max*((irun+1)/32)*1000;
  const hold=max*((ihold+1)/32)*1000;
  document.getElementById("runCurrent").textContent=Math.round(run);
  document.getElementById("holdCurrent").textContent=Math.round(hold);
}

function bindRawInputs(){
  const hx=document.getElementById("hexValue"), dc=document.getElementById("decValue"), bn=document.getElementById("binValue");
  hx.onchange=()=>{const v=parseNum(hx.value,16); if(Number.isFinite(v)) setValue(selected,v,writable(byName[selected]));};
  dc.onchange=()=>{const v=parseNum(dc.value,10); if(Number.isFinite(v)) setValue(selected,v,writable(byName[selected]));};
  bn.onchange=()=>{let s=bn.value.trim().replace(/\s/g,""); if(!s.startsWith("0b"))s="0b"+s;const v=parseNum(s,2);if(Number.isFinite(v))setValue(selected,v,writable(byName[selected]));};
}

document.getElementById("search").addEventListener("input",renderList);
document.getElementById("hideAdvanced").addEventListener("change",renderList);
document.querySelectorAll(".filter").forEach(b=>b.onclick=()=>{filter=b.dataset.filter;renderList()});
document.getElementById("includeReg").onchange=e=>{
  const r=byName[selected];
  if(!writable(r)) return;
  if(r.danger && e.target.checked){
    if(!confirm("OTP_PROG is irreversible. Include it only for review? The generated C line will remain commented out.")){e.target.checked=false;return}
  }
  included[selected]=e.target.checked;renderList();renderCode();renderChecks();
};
document.getElementById("channelExpr").addEventListener("input",renderCode);
document.getElementById("outputMode").addEventListener("change",renderCode);
document.getElementById("rsense").addEventListener("input",updateCurrent);
document.getElementById("vfs").addEventListener("input",updateCurrent);
document.getElementById("clearBtn").onclick=()=>{
  if(!confirm(`Clear all values and inclusion flags for Channel ${activeChannel}?`)) return;
  const fresh=createChannelState();
  channelStates[activeChannel]=fresh;
  values=fresh.values;
  included=fresh.included;
  selected="GCONF";
  document.getElementById("rsense").value=fresh.meta.rsense;
  document.getElementById("vfs").value=fresh.meta.vfs;
  renderList();renderEditor();renderCode();renderChecks();updateCurrent();
};
document.getElementById("copyBtn").onclick=async()=>{
  try{await navigator.clipboard.writeText(document.getElementById("code").value);document.getElementById("copyBtn").textContent="Copied";setTimeout(()=>document.getElementById("copyBtn").textContent="Copy C init",1000)}
  catch{document.getElementById("code").select();document.execCommand("copy")}
};
document.getElementById("exportBtn").onclick=()=>{
  saveActiveChannelMeta();
  const data={
    device:"TMC2160A",
    revision:"1.10",
    channelCount,
    activeChannel,
    channels:channelStates.map((st,i)=>({
      channel:i,
      values:st.values,
      included:st.included,
      meta:st.meta
    }))
  };
  const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download="TMC2160_multichannel_config.json";
  a.click();
  URL.revokeObjectURL(a.href);
};
document.getElementById("importBtn").onclick=()=>document.getElementById("fileInput").click();
document.getElementById("fileInput").onchange=e=>{
  const f=e.target.files[0];if(!f)return;
  const rd=new FileReader();
  rd.onload=()=>{
    try{
      const data=JSON.parse(rd.result);

      if(Array.isArray(data.channels)){
        const wanted=clamp(Number(data.channelCount)||data.channels.length||1,1,6);
        while(channelStates.length<wanted)channelStates.push(createChannelState());
        if(channelStates.length>wanted)channelStates.splice(wanted);
        channelCount=wanted;

        for(let i=0;i<channelCount;i++){
          const src=data.channels[i]||{};
          const st=createChannelState();
          for(const r of REGS){
            if(src.values && r.name in src.values)st.values[r.name]=Number(src.values[r.name])>>>0;
            if(src.included && r.name in src.included)st.included[r.name]=!!src.included[r.name];
          }
          if(src.meta)st.meta={...st.meta,...src.meta};
          channelStates[i]=st;
        }
        activeChannel=clamp(Number(data.activeChannel)||0,0,channelCount-1);
      }else{
        /* Backward compatibility with the previous single-channel JSON format. */
        const st=createChannelState();
        for(const r of REGS){
          if(data.values && r.name in data.values)st.values[r.name]=Number(data.values[r.name])>>>0;
          if(data.included && r.name in data.included)st.included[r.name]=!!data.included[r.name];
        }
        channelCount=1;
        channelStates.splice(0,channelStates.length,st);
        activeChannel=0;
      }

      values=channelStates[activeChannel].values;
      included=channelStates[activeChannel].included;
      document.getElementById("channelCount").value=String(channelCount);
      document.getElementById("rsense").value=channelStates[activeChannel].meta.rsense;
      document.getElementById("vfs").value=channelStates[activeChannel].meta.vfs;
      refreshChannelSelectors();
      renderWizardChannelTabs();
      renderList();renderEditor();renderCode();renderChecks();updateCurrent();
    }catch(err){
      alert("Invalid JSON configuration file.");
    }
  };
  rd.readAsText(f);
};


/* ---------- Main multi-channel controls ---------- */
document.getElementById("channelCount").addEventListener("change", e => {
  const next = Number(e.target.value);

  if (next < channelCount) {
    const ok = confirm(
      `Reduce the project from ${channelCount} to ${next} channels? ` +
      `Configuration for removed channels will be discarded.`
    );

    if (!ok) {
      e.target.value = String(channelCount);
      return;
    }
  }

  setChannelCount(next);
});

document.getElementById("activeChannelSelect").addEventListener("change", e => {
  activateChannel(Number(e.target.value));
});

document.getElementById("copyChannelBtn").addEventListener("click", () => {
  saveActiveChannelMeta();

  if (activeChannel + 1 >= channelCount) {
    alert("There is no next channel. Increase the channel count first.");
    return;
  }

  const src = channelStates[activeChannel];

  channelStates[activeChannel + 1] = {
    values:   { ...src.values },
    included: { ...src.included },
    meta:     { ...src.meta }
  };

  activateChannel(activeChannel + 1);
});

/* ---------- Guided configuration wizard ---------- */
const WIZ_STEPS = [
  ["Motor & hardware","Motor, Rsense and clock"],
  ["STEP / DIR","Microsteps and direction"],
  ["Current","IRUN / GLOBAL_SCALER"],
  ["Chopper","SpreadCycle / StealthChop"],
  ["Load features","StallGuard and CoolStep"],
  ["Gate & protection","Driver strength and power-down"],
  ["Review","Apply selected changes"]
];
let wizStep = 0;
let wizChannel = 0;
let wizardForms = [];

function wizardInputElements(){
  return [...document.querySelectorAll("#wizardModal input, #wizardModal select")]
    .filter(e=>!["wizBack","wizNext","wizApply"].includes(e.id));
}
function captureWizardForm(){
  const data={};
  for(const e of wizardInputElements()){
    if(!e.id && !e.name)continue;
    const key=e.id || `${e.name}:${e.value}`;
    if(e.type==="radio"){
      if(e.checked)data[`radio:${e.name}`]=e.value;
    }else if(e.type==="checkbox"){
      data[key]=!!e.checked;
    }else{
      data[key]=e.value;
    }
  }
  return data;
}
function restoreWizardForm(data){
  if(!data)return;
  for(const e of wizardInputElements()){
    if(e.type==="radio"){
      const v=data[`radio:${e.name}`];
      if(v!==undefined)e.checked=(e.value===v);
    }else{
      const key=e.id || `${e.name}:${e.value}`;
      if(!(key in data))continue;
      if(e.type==="checkbox")e.checked=!!data[key];
      else e.value=data[key];
    }
  }
  /* Refresh conditional wizard sections after restoring. */
  document.getElementById("wStealthOptions").classList.toggle("wiz-hidden",wRadio("wChopperMode")!=="hybrid");
  document.getElementById("wStallOptions").classList.toggle("wiz-hidden",!wCheck("wStallEnable"));
  document.getElementById("wCoolOptions").classList.toggle("wiz-hidden",!wCheck("wCoolEnable"));
  updateWizardCurrentPreview();
}
function seedWizardFromChannel(index){
  const st=channelStates[index];
  const data=captureWizardForm();
  data.wRsense=String(st.meta.rsense||20);
  data.wMotorCurrent=data.wMotorCurrent||"2.0";
  return data;
}
function saveWizardChannel(){
  if(wizChannel<0 || wizChannel>=channelCount)return;
  wizardForms[wizChannel]=captureWizardForm();
}
function switchWizardChannel(index){
  saveWizardChannel();
  wizChannel=clamp(Number(index)||0,0,channelCount-1);
  if(!wizardForms[wizChannel])wizardForms[wizChannel]=seedWizardFromChannel(wizChannel);
  restoreWizardForm(wizardForms[wizChannel]);
  renderWizardChannelTabs();
  if(wizStep===6)renderWizardReview();
}
function renderWizardChannelTabs(){
  const host=document.getElementById("wizChannelTabs");
  if(!host)return;
  host.innerHTML="";
  for(let i=0;i<channelCount;i++){
    const b=document.createElement("button");
    b.type="button";
    b.className="wiz-ch-tab"+(i===wizChannel?" active":"")+(wizardForms[i]?" configured":"");
    b.textContent=`CH${i}`;
    b.onclick=()=>switchWizardChannel(i);
    host.appendChild(b);
  }
  const cp=document.getElementById("wizCopyPrev");
  if(cp)cp.disabled=wizChannel===0;
}

function wNum(id, fallback=0){
  const v=Number(document.getElementById(id).value);
  return Number.isFinite(v)?v:fallback;
}
function wCheck(id){ return !!document.getElementById(id).checked; }
function wRadio(name){
  const e=document.querySelector(`input[name="${name}"]:checked`);
  return e?e.value:"";
}
function clamp(x,a,b){ return Math.max(a,Math.min(b,x)); }

function wizardSetField(patch, regName, fieldName, val){
  const r=byName[regName];
  const f=r?.fields.find(x=>x.name===fieldName);
  if(!f) return;
  const base=(regName in patch)?patch[regName]:(values[regName]>>>0);
  patch[regName]=encodeField(base,f,val)>>>0;
}
function wizardSetRaw(patch, regName, val){
  patch[regName]=val>>>0;
}
function rpmToTstep(rpm, fullSteps, clockHz){
  if(!(rpm>0) || !(fullSteps>0) || !(clockHz>0)) return 0;
  return clamp(Math.round((clockHz*60)/(rpm*fullSteps*256)),1,0xFFFFF);
}
function powerdownMsToRaw(ms, clockHz){
  if(!(ms>0) || !(clockHz>0)) return 0;
  // TPOWERDOWN unit = 2^18 / fCLK seconds.
  return clamp(Math.round((ms/1000)*clockHz/262144),0,255);
}
function calculateWizardCurrent(){
  const target=wNum("wMotorCurrent",2);
  const rs=wNum("wRsense",20)/1000;
  const VFS=0.325;
  const max=(VFS/rs)/Math.sqrt(2);
  const mode=wRadio("wCurrentMode");
  let irun=31, gs=0;
  if(mode==="irun"){
    gs=0;
    irun=clamp(Math.round((target/max)*32-1),0,31);
  }else{
    let req=(target/max)*256;
    if(req>=255.5){gs=0;irun=31}
    else if(req>=32){gs=clamp(Math.round(req),32,255);irun=31}
    else{
      gs=32;
      irun=clamp(Math.round((target/max)*32*256/gs-1),0,31);
    }
  }
  const gseff=gs===0?256:gs;
  const actual=max*(gseff/256)*((irun+1)/32);
  const holdPct=clamp(wNum("wHoldPercent",30),3,100)/100;
  let ihold=clamp(Math.round((irun+1)*holdPct-1),0,31);
  const hold=max*(gseff/256)*((ihold+1)/32);
  return {target,max,irun,gs,actual,ihold,hold};
}
function updateWizardCurrentPreview(){
  const r=calculateWizardCurrent();
  const mode=wRadio("wCurrentMode");
  const gsLabel=r.gs===0?"0 (full scale / 256)":String(r.gs);
  document.getElementById("wCurrentPreview").textContent =
`Method          : ${mode==="irun"?"IRUN only":"IRUN + GLOBAL_SCALER"}
GLOBAL_SCALER   : ${gsLabel}
IRUN            : ${r.irun}
IHOLD           : ${r.ihold}
Requested       : ${(r.target*1000).toFixed(0)} mA RMS
Estimated run   : ${(r.actual*1000).toFixed(0)} mA RMS
Estimated hold  : ${(r.hold*1000).toFixed(0)} mA RMS
Full-scale      : ${(r.max*1000).toFixed(0)} mA RMS`;
  const warn=document.getElementById("wCurrentWarn");
  const msgs=[];
  if(r.target>r.max) msgs.push("Requested current exceeds calculated full-scale current and will be clamped.");
  if(r.irun<16) msgs.push(`IRUN=${r.irun} is below the 16…31 range preferred for best microstep performance.`);
  if(r.gs>0 && r.gs<128) msgs.push(`GLOBAL_SCALER=${r.gs} is relatively low; consider a larger Rsense if this is your normal current range.`);
  if(msgs.length){warn.textContent=msgs.join(" ");warn.classList.remove("wiz-hidden")}
  else warn.classList.add("wiz-hidden");
}
function buildWizardPatch(){
  const p={};
  const fullSteps=clamp(Math.round(wNum("wFullSteps",200)),1,100000);
  const clk=wNum("wClockMHz",12)*1e6;

  // STEP/DIR
  const micro=Number(document.getElementById("wMicrosteps").value);
  const mresMap={256:0,128:1,64:2,32:3,16:4,8:5,4:6,2:7,1:8};
  wizardSetField(p,"CHOPCONF","MRES",mresMap[micro] ?? 4);
  wizardSetField(p,"CHOPCONF","INTPOL",wCheck("wInterpolation")?1:0);
  wizardSetField(p,"CHOPCONF","DEDGE",wCheck("wDoubleEdge")?1:0);
  wizardSetField(p,"GCONF","MULTISTEP_FILT",wCheck("wMultistep")?1:0);
  wizardSetField(p,"GCONF","SHAFT",wCheck("wReverse")?1:0);

  // Current
  const c=calculateWizardCurrent();
  wizardSetRaw(p,"GLOBAL_SCALER",c.gs);
  wizardSetField(p,"IHOLD_IRUN","IRUN",c.irun);
  wizardSetField(p,"IHOLD_IRUN","IHOLD",c.ihold);
  wizardSetField(p,"IHOLD_IRUN","IHOLDDELAY",clamp(Math.round(wNum("wIholdDelay",6)),0,15));

  // Chopper / PWM mode
  const chopMode=wRadio("wChopperMode");
  wizardSetField(p,"CHOPCONF","TOFF",clamp(Math.round(wNum("wToff",5)),1,15));
  wizardSetField(p,"CHOPCONF","TBL",clamp(Number(document.getElementById("wTbl").value),0,3));
  wizardSetField(p,"GCONF","EN_PWM_MODE",chopMode==="hybrid"?1:0);
  if(chopMode==="hybrid"){
    wizardSetRaw(p,"TPWMTHRS",rpmToTstep(wNum("wPwmRpm",60),fullSteps,clk));
  }else{
    wizardSetRaw(p,"TPWMTHRS",0);
  }

  // StallGuard and CoolStep
  const stall=wCheck("wStallEnable"), cool=wCheck("wCoolEnable");
  const diag=document.getElementById("wDiag").value;
  wizardSetField(p,"GCONF","DIAG0_STALL",(stall&&diag==="diag0")?1:0);
  wizardSetField(p,"GCONF","DIAG1_STALL",(stall&&diag==="diag1")?1:0);
  wizardSetField(p,"COOLCONF","SGT",stall?clamp(Math.round(wNum("wSgt",0)),-64,63):0);
  wizardSetField(p,"COOLCONF","SFILT",(stall&&wCheck("wSfilt"))?1:0);
  if(stall || cool){
    wizardSetRaw(p,"TCOOLTHRS",rpmToTstep(wNum("wStallRpm",30),fullSteps,clk));
  }else{
    wizardSetRaw(p,"TCOOLTHRS",0);
  }
  if(cool){
    wizardSetField(p,"COOLCONF","SEMIN",clamp(Math.round(wNum("wSemin",5)),1,15));
    wizardSetField(p,"COOLCONF","SEMAX",clamp(Math.round(wNum("wSemax",2)),0,15));
    wizardSetField(p,"COOLCONF","SEUP",clamp(Math.round(wNum("wSeup",1)),0,3));
    wizardSetField(p,"COOLCONF","SEDN",clamp(Math.round(wNum("wSedn",1)),0,3));
    wizardSetField(p,"COOLCONF","SEIMIN",wCheck("wSeimin")?1:0);
  }else{
    wizardSetField(p,"COOLCONF","SEMIN",0);
  }

  // Gate driver, protection and power-down
  wizardSetField(p,"DRV_CONF","DRVSTRENGTH",Number(document.getElementById("wDrvStrength").value));
  if(wCheck("wProtect")){
    wizardSetField(p,"CHOPCONF","DISS2G",0);
    wizardSetField(p,"CHOPCONF","DISS2VS",0);
  }
  wizardSetRaw(p,"TPOWERDOWN",powerdownMsToRaw(wNum("wPowerdownMs",250),clk));
  return p;
}
function wizardPatchWarnings(p){
  const msgs=[];
  const c=calculateWizardCurrent();
  if(c.irun<16) msgs.push(["warn",`IRUN will be ${c.irun}; this is below the 16…31 range preferred for best microstep performance.`]);
  if(c.gs>0 && c.gs<128) msgs.push(["warn",`GLOBAL_SCALER will be ${c.gs}. A larger sense resistor may give a better normal operating range.`]);
  if(wCheck("wDoubleEdge")) msgs.push(["warn","Double-edge STEP counting is enabled. Make sure your STEP generator is designed for it."]);
  if(wCheck("wStallEnable") && wNum("wStallRpm",30)<5) msgs.push(["warn","The selected StallGuard threshold is very low. StallGuard is unreliable at very low speeds."]);
  if(wRadio("wChopperMode")==="hybrid" && !(wNum("wPwmRpm",60)>0)) msgs.push(["danger","StealthChop transition RPM must be greater than zero."]);
  return msgs;
}
function renderWizardReview(){
  saveWizardChannel();
  const keepChannel=wizChannel;
  const keepForm=captureWizardForm();

  const all=[];
  let totalRegs=0;

  for(let c=0;c<channelCount;c++){
    if(!wizardForms[c])wizardForms[c]=seedWizardFromChannel(c);
    restoreWizardForm(wizardForms[c]);
    const p=buildWizardPatch();
    const cur=calculateWizardCurrent();
    totalRegs+=Object.keys(p).length;
    all.push({channel:c,patch:p,current:cur,warnings:wizardPatchWarnings(p)});
  }

  restoreWizardForm(keepForm);
  wizChannel=keepChannel;
  renderWizardChannelTabs();

  const avgRun=all.reduce((a,x)=>a+x.current.actual,0)/Math.max(1,all.length);
  document.getElementById("wKpi").innerHTML =
    `<div><small>Channels</small><b>${channelCount}</b></div>`+
    `<div><small>Total register writes</small><b>${totalRegs}</b></div>`+
    `<div><small>Average run current</small><b>${Math.round(avgRun*1000)} mA</b></div>`;

  const blocks=[];
  for(const item of all){
    blocks.push(`<div style="margin:14px 0 7px;font-weight:750;color:#8bd9ff">Channel ${item.channel} — ${Math.round(item.current.actual*1000)} mA run / ${Math.round(item.current.hold*1000)} mA hold</div>`);
    for(const [n,val] of Object.entries(item.patch)){
      blocks.push(`<div class="wiz-summary-item"><code>${n} · 0x${byName[n].addr.toString(16).toUpperCase().padStart(2,"0")}</code>
        <span class="old">old ${hex32(channelStates[item.channel].values[n])}</span><span class="new">new ${hex32(val)}</span></div>`);
    }
  }
  document.getElementById("wSummary").innerHTML=blocks.join("");

  const warnings=[];
  for(const item of all){
    for(const [cls,msg] of item.warnings)
      warnings.push(`<div class="wiz-note ${cls}"><b>Channel ${item.channel}:</b> ${msg}</div>`);
  }
  document.getElementById("wReviewWarnings").innerHTML=warnings.join("");
}
function renderWizard(){
  document.querySelectorAll(".wiz-page").forEach(p=>p.classList.toggle("active",Number(p.dataset.step)===wizStep));
  const steps=document.getElementById("wizardSteps");steps.innerHTML="";
  WIZ_STEPS.forEach((x,i)=>{
    const d=document.createElement("div");
    d.className="wiz-stepnav "+(i===wizStep?"active":i<wizStep?"done":"");
    d.innerHTML=`<span class="dot">${i<wizStep?"✓":i+1}</span><span><b>${x[0]}</b><br><small>${x[1]}</small></span>`;
    steps.appendChild(d);
  });
  document.getElementById("wizTitle").textContent=WIZ_STEPS[wizStep][0];
  document.getElementById("wizSubtitle").textContent=WIZ_STEPS[wizStep][1];
  document.getElementById("wizProgress").textContent=`Step ${wizStep+1} of ${WIZ_STEPS.length} · Channel ${wizChannel} of ${channelCount}`;
  renderWizardChannelTabs();
  document.getElementById("wizBack").disabled=wizStep===0;
  document.getElementById("wizNext").classList.toggle("wiz-hidden",wizStep===WIZ_STEPS.length-1);
  document.getElementById("wizApply").classList.toggle("wiz-hidden",wizStep!==WIZ_STEPS.length-1);
  if(wizStep===2) updateWizardCurrentPreview();
  if(wizStep===6) renderWizardReview();
}
function openWizard(){
  saveActiveChannelMeta();
  wizardForms=Array.from({length:channelCount},(_,i)=>null);
  wizChannel=activeChannel;
  wizardForms[wizChannel]=seedWizardFromChannel(wizChannel);
  restoreWizardForm(wizardForms[wizChannel]);
  wizStep=0;
  document.getElementById("wizardModal").classList.add("open");
  document.getElementById("wizardModal").setAttribute("aria-hidden","false");
  renderWizard();
}
function closeWizard(){
  document.getElementById("wizardModal").classList.remove("open");
  document.getElementById("wizardModal").setAttribute("aria-hidden","true");
}
function applyWizard(){
  saveWizardChannel();
  const keepForm=captureWizardForm();

  for(let c=0;c<channelCount;c++){
    if(!wizardForms[c]){
      /* If the user never opened this channel in the wizard, copy the
         previous channel answers when possible. This makes a 3-channel
         setup convenient while still allowing per-channel edits. */
      wizardForms[c]=c>0 ? {...wizardForms[c-1]} : seedWizardFromChannel(c);
    }
    restoreWizardForm(wizardForms[c]);
    const p=buildWizardPatch();

    for(const [name,val] of Object.entries(p)){
      channelStates[c].values[name]=val>>>0;
      if(writable(byName[name]))channelStates[c].included[name]=true;
    }
    channelStates[c].meta.rsense=wNum("wRsense",20);
    channelStates[c].meta.vfs=325;
  }

  restoreWizardForm(keepForm);
  values=channelStates[activeChannel].values;
  included=channelStates[activeChannel].included;
  document.getElementById("rsense").value=channelStates[activeChannel].meta.rsense;
  document.getElementById("vfs").value=channelStates[activeChannel].meta.vfs;
  selected="IHOLD_IRUN";
  closeWizard();
  refreshChannelSelectors();
  renderList();renderEditor();renderCode();renderChecks();updateCurrent();
}

document.getElementById("wizardBtn").onclick=openWizard;
document.getElementById("wizCopyPrev").onclick=()=>{
  if(wizChannel===0)return;
  saveWizardChannel();
  const prev=wizardForms[wizChannel-1] || seedWizardFromChannel(wizChannel-1);
  wizardForms[wizChannel]={...prev};
  restoreWizardForm(wizardForms[wizChannel]);
  renderWizardChannelTabs();
};
document.getElementById("wizClose").onclick=closeWizard;
document.getElementById("wizardModal").addEventListener("click",e=>{if(e.target.id==="wizardModal")closeWizard()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&document.getElementById("wizardModal").classList.contains("open"))closeWizard()});
document.getElementById("wizBack").onclick=()=>{if(wizStep>0){wizStep--;renderWizard()}};
document.getElementById("wizNext").onclick=()=>{if(wizStep<WIZ_STEPS.length-1){wizStep++;renderWizard()}};
document.getElementById("wizApply").onclick=applyWizard;

["wMotorCurrent","wRsense","wHoldPercent"].forEach(id=>document.getElementById(id).addEventListener("input",updateWizardCurrentPreview));
document.querySelectorAll('input[name="wCurrentMode"]').forEach(e=>e.addEventListener("change",updateWizardCurrentPreview));
document.querySelectorAll('input[name="wChopperMode"]').forEach(e=>e.addEventListener("change",()=>{
  document.getElementById("wStealthOptions").classList.toggle("wiz-hidden",wRadio("wChopperMode")!=="hybrid");
}));
document.getElementById("wStallEnable").addEventListener("change",e=>document.getElementById("wStallOptions").classList.toggle("wiz-hidden",!e.target.checked));
document.getElementById("wCoolEnable").addEventListener("change",e=>document.getElementById("wCoolOptions").classList.toggle("wiz-hidden",!e.target.checked));


/* ---------- Dedicated StallGuard2 editor, scoped to active channel ---------- */
const sgEl=id=>document.getElementById(id);
const sgField=(reg,field)=>byName[reg].fields.find(f=>f.name===field);
let sgUpdating=false;
function sgTstepFromRpm(rpm,steps,clockMHz){
  if(!(rpm>0 && steps>0 && clockMHz>0))return 0;
  return Math.max(1,Math.min(1048575,Math.round(clockMHz*1e6*60/(rpm*steps*256))));
}
function sgRpmFromTstep(raw,steps,clockMHz){
  return raw>0 && steps>0 && clockMHz>0 ? clockMHz*1e6*60/(raw*steps*256) : 0;
}
function sgUpdatePreview(){
  const enabled=sgEl('sgEnable').checked;
  const raw=Math.floor(Number(sgEl('sgTcoolRaw').value));
  const rpm=Number(sgEl('sgMinRpm').value);
  const steps=Number(sgEl('sgFullSteps').value);
  const mhz=Number(sgEl('sgClock').value);
  let msg=`Channel ${activeChannel} · TCOOLTHRS = ${enabled?(Number.isInteger(raw)?raw:'invalid'):'0 (disabled)'}<br>`;
  if(enabled && raw>=1 && raw<=1048575 && steps>0 && mhz>0){
    msg+=`Approximate minimum motor speed: ${sgRpmFromTstep(raw,steps,mhz).toFixed(2)} RPM<br>`;
  }
  msg+=`SGT = ${sgEl('sgSensitivity').value}; SFILT = ${sgEl('sgFilter').checked?1:0}; DIAG = ${sgEl('sgDiag').value}.`;
  if(enabled && !(rpm>0))msg+='<br><span class="sg-warning">Enter a valid RPM threshold.</span>';
  if(enabled && !(raw>=1 && raw<=1048575))msg+='<br><span class="sg-warning">Raw TCOOLTHRS must be between 1 and 1048575.</span>';
  if(decodeField(values.GCONF,sgField('GCONF','EN_PWM_MODE'))===1)
    msg+='<br><span class="sg-warning">EN_PWM_MODE is enabled. StallGuard2 requires SpreadCycle; verify operating mode in the intended speed window.</span>';
  if(decodeField(values.COOLCONF,sgField('COOLCONF','SEMIN'))>0)
    msg+='<br><span class="sg-warning">CoolStep is configured and shares the TCOOLTHRS velocity threshold.</span>';
  sgEl('sgPreview').innerHTML=msg;
  sgEl('sgMinRpm').disabled=!enabled;
  sgEl('sgTcoolRaw').disabled=!enabled;
}
function sgFromRpm(){
 if(sgUpdating)return;
 sgUpdating=true;
 sgEl('sgTcoolRaw').value=String(sgTstepFromRpm(Number(sgEl('sgMinRpm').value),Number(sgEl('sgFullSteps').value),Number(sgEl('sgClock').value)));
 sgUpdating=false;sgUpdatePreview();
}
function sgFromRaw(){
 if(sgUpdating)return;
 sgUpdating=true;
 const rpm=sgRpmFromTstep(Number(sgEl('sgTcoolRaw').value),Number(sgEl('sgFullSteps').value),Number(sgEl('sgClock').value));
 sgEl('sgMinRpm').value=rpm>0?String(Number(rpm.toFixed(5))):'';
 sgUpdating=false;sgUpdatePreview();
}
function sgOpen(){
 const st=channelStates[activeChannel];
 const meta=st.meta;
 const steps=Number(meta.sgFullSteps)||200, clock=Number(meta.sgClockMHz)||12;
 const raw=values.TCOOLTHRS & 0xFFFFF;
 sgEl('sgChannelLabel').textContent=`Editing Channel ${activeChannel} — registers GCONF, COOLCONF and TCOOLTHRS`;
 sgEl('sgFullSteps').value=steps;
 sgEl('sgClock').value=clock;
 sgEl('sgEnable').checked=raw>0;
 sgEl('sgSensitivity').value=decodeField(values.COOLCONF,sgField('COOLCONF','SGT'));
 sgEl('sgFilter').checked=!!decodeField(values.COOLCONF,sgField('COOLCONF','SFILT'));
 const d0=decodeField(values.GCONF,sgField('GCONF','DIAG0_STALL'));
 const d1=decodeField(values.GCONF,sgField('GCONF','DIAG1_STALL'));
 sgEl('sgDiag').value=d1?'diag1':d0?'diag0':'none';
 sgEl('sgTcoolRaw').value=raw||sgTstepFromRpm(30,steps,clock);
 sgEl('sgMinRpm').value=String(Number(sgRpmFromTstep(Number(sgEl('sgTcoolRaw').value),steps,clock).toFixed(5)));
 sgEl('sgDialog').classList.add('open');sgEl('sgDialog').setAttribute('aria-hidden','false');
 sgUpdatePreview();sgEl('sgClose').focus();
}
function sgClose(){sgEl('sgDialog').classList.remove('open');sgEl('sgDialog').setAttribute('aria-hidden','true');sgEl('stallDialogBtn').focus();}
function sgApply(){
 const enabled=sgEl('sgEnable').checked;
 const raw=Number(sgEl('sgTcoolRaw').value),sgt=Number(sgEl('sgSensitivity').value);
 const steps=Number(sgEl('sgFullSteps').value),clock=Number(sgEl('sgClock').value);
 if(!Number.isInteger(sgt)||sgt<-64||sgt>63){alert('SGT must be an integer from -64 to 63.');return;}
 if(!(steps>0&&Number.isInteger(steps)&&clock>0)){alert('Enter valid full steps and driver clock.');return;}
 if(enabled&&(!Number.isInteger(raw)||raw<1||raw>1048575)){alert('TCOOLTHRS raw must be an integer from 1 to 1048575.');return;}
 const coolActive=decodeField(values.COOLCONF,sgField('COOLCONF','SEMIN'))>0;
 if(!enabled && coolActive && !confirm('Disabling TCOOLTHRS can also disable the configured CoolStep operating window. Continue?'))return;
 const diag=sgEl('sgDiag').value;
 const cool=encodeField(encodeField(values.COOLCONF,sgField('COOLCONF','SGT'),sgt),sgField('COOLCONF','SFILT'),sgEl('sgFilter').checked?1:0);
 let g=encodeField(values.GCONF,sgField('GCONF','DIAG0_STALL'),enabled&&diag==='diag0'?1:0);
 g=encodeField(g,sgField('GCONF','DIAG1_STALL'),enabled&&diag==='diag1'?1:0);
 values.COOLCONF=cool>>>0;
 values.GCONF=g>>>0;
 values.TCOOLTHRS=enabled?raw:0;
 included.COOLCONF=true;included.GCONF=true;included.TCOOLTHRS=true;
 channelStates[activeChannel].meta.sgFullSteps=steps;
 channelStates[activeChannel].meta.sgClockMHz=clock;
 selected='COOLCONF';
 sgClose();renderList();renderEditor();renderCode();renderChecks();updateCurrent();
}
sgEl('stallDialogBtn').addEventListener('click',sgOpen);
sgEl('sgClose').addEventListener('click',sgClose);
sgEl('sgCancel').addEventListener('click',sgClose);
sgEl('sgApply').addEventListener('click',sgApply);
sgEl('sgDialog').addEventListener('click',e=>{if(e.target===sgEl('sgDialog'))sgClose();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&sgEl('sgDialog').classList.contains('open'))sgClose();});
sgEl('sgMinRpm').addEventListener('input',sgFromRpm);
sgEl('sgTcoolRaw').addEventListener('input',sgFromRaw);
for(const id of ['sgFullSteps','sgClock'])sgEl(id).addEventListener('input',sgFromRpm);
for(const id of ['sgEnable','sgSensitivity','sgFilter','sgDiag'])sgEl(id).addEventListener('change',sgUpdatePreview);

bindRawInputs();
addStaticHelp();
document.getElementById("channelCount").value=String(channelCount);
refreshChannelSelectors();
renderWizardChannelTabs();
renderList();renderEditor();renderCode();renderChecks();updateCurrent();

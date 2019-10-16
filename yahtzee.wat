(module

  (export "ones" (func $ones))
  (export "twos" (func $twos))

  (func $ones
    (param $a i32) (param $b i32) (param $c i32) (param $d i32) (param $e i32)
    (result i32)

    (return (call $numbers (i32.const 1)
      (local.get $a) (local.get $b) (local.get $c) (local.get $d) (local.get $e)))
  )

  (func $twos
    (param $a i32) (param $b i32) (param $c i32) (param $d i32) (param $e i32)
    (result i32)

    (return (call $numbers (i32.const 2)
      (local.get $a) (local.get $b) (local.get $c) (local.get $d) (local.get $e)))
  )

  (func $numbers
    (param $num i32)
    (param $a i32) (param $b i32) (param $c i32) (param $d i32) (param $e i32)
    (result i32)

    (local $accum i32)
    (local.set $accum (i32.const 0))

    (local.set $accum
      (call $add_if_n (local.get $accum) (local.get $a) (local.get $num)))
    (local.set $accum
      (call $add_if_n (local.get $accum) (local.get $b) (local.get $num)))
    (local.set $accum
      (call $add_if_n (local.get $accum) (local.get $c) (local.get $num)))
    (local.set $accum
      (call $add_if_n (local.get $accum) (local.get $d) (local.get $num)))
    (local.set $accum
      (call $add_if_n (local.get $accum) (local.get $e) (local.get $num)))
    
    (return (local.get $accum))
  )

  (func $add_if_n
    (param $accum i32) (param $val i32) (param $n i32)
    (result i32)

    (if (i32.eq (local.get $val) (local.get $n))
      (then
        (return (i32.add (local.get $accum) (local.get $n)))
      )
    )

    (return (local.get $accum))
  )

)

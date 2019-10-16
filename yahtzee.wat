(module

  (export "ones" (func $ones))

  (func $ones 
    (param $a i32) (param $b i32) (param $c i32) (param $d i32) (param $e i32)
    (result i32)

    (local $accum i32)
    (local.set $accum (i32.const 0))

    (local.set $accum
      (call $add_if_n (local.get $accum) (local.get $a) (i32.const 1)))
    (local.set $accum
      (call $add_if_n (local.get $accum) (local.get $b) (i32.const 1)))
    (local.set $accum
      (call $add_if_n (local.get $accum) (local.get $c) (i32.const 1)))
    (local.set $accum
      (call $add_if_n (local.get $accum) (local.get $d) (i32.const 1)))
    (local.set $accum
      (call $add_if_n (local.get $accum) (local.get $e) (i32.const 1)))
    
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
